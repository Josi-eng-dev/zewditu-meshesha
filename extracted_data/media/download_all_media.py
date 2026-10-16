"""
Download All Media Assets from Zewditu Meshesha Website
======================================================
This script reads `media_inventory.json` (400 items) and downloads all original assets
(images, documents, PDFs, etc.) directly into `media/all_downloads/`.

Features:
- ThreadPoolExecutor for fast concurrent downloads
- Auto-skips already downloaded files (resumable)
- URL encoding for unicode characters (Amharic Ge'ez names)
- Progress indicator
"""

import os
import json
import ssl
import urllib.request
import urllib.parse
from concurrent.futures import ThreadPoolExecutor, as_completed

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
INVENTORY_FILE = os.path.join(BASE_DIR, "media_inventory.json")
DOWNLOAD_DIR = os.path.join(BASE_DIR, "all_downloads")

os.makedirs(DOWNLOAD_DIR, exist_ok=True)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def safe_filename(name):
    # remove invalid windows characters
    name = re_sub(r'[\\/*?:"<>|]', '_', name)
    return name

import re
def re_sub(pattern, repl, string):
    return re.sub(pattern, repl, string)

def download_item(item):
    url = item.get("source_url")
    if not url:
        return (item.get("id"), "NO_URL", 0)
    
    # Generate filename
    basename = os.path.basename(urllib.parse.unquote(url.split("?")[0]))
    fn = f"{item['id']}_{basename}"
    fn = safe_filename(fn)
    target = os.path.join(DOWNLOAD_DIR, fn)

    if os.path.exists(target) and os.path.getsize(target) > 0:
        return (item["id"], "EXISTS", os.path.getsize(target))

    try:
        parts = list(urllib.parse.urlsplit(url))
        parts[2] = urllib.parse.quote(parts[2])
        enc_url = urllib.parse.urlunsplit(parts)
        req = urllib.request.Request(enc_url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, context=ctx, timeout=25) as resp:
            data = resp.read()
            with open(target, "wb") as f:
                f.write(data)
            return (item["id"], "DOWNLOADED", len(data))
    except Exception as e:
        return (item["id"], f"ERROR: {e}", 0)

def main():
    if not os.path.exists(INVENTORY_FILE):
        print(f"Inventory file not found: {INVENTORY_FILE}")
        return

    with open(INVENTORY_FILE, "r", encoding="utf-8") as f:
        items = json.load(f)

    print(f"Total media items to process: {len(items)}")
    downloaded = 0
    existed = 0
    errors = 0

    with ThreadPoolExecutor(max_workers=8) as pool:
        futures = {pool.submit(download_item, item): item for item in items}
        for future in as_completed(futures):
            item_id, status, size = future.result()
            if status == "DOWNLOADED":
                downloaded += 1
                if downloaded % 20 == 0:
                    print(f"Progress: {downloaded} new files downloaded...")
            elif status == "EXISTS":
                existed += 1
            else:
                errors += 1
                print(f"Item {item_id} failed: {status}")

    print("\n=== DOWNLOAD SUMMARY ===")
    print(f"Total: {len(items)}")
    print(f"Newly Downloaded: {downloaded}")
    print(f"Already Existed: {existed}")
    print(f"Errors: {errors}")
    print(f"Saved into: {DOWNLOAD_DIR}")

if __name__ == "__main__":
    main()
