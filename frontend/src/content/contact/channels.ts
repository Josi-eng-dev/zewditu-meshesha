import type { ContactChannels } from '@/types/content'

/**
 * U02/U03: leave empty until organization verifies publishable values.
 * Do not invent phones, emails, or addresses from extraction.
 */
export const contactChannels: ContactChannels = {
  verified: false,
  phones: [],
  emails: [],
  addressLines: [],
  pendingMessage:
    'Contact details are being confirmed with the organization. Verified channels will appear here once approved for publication.',
}
