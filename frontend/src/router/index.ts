import { createRouter, createWebHistory } from 'vue-router'
import ContentPageView from '@/pages/ContentPageView.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import { isAllowlistedPage } from '@/content/manifest'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ContentPageView,
      meta: { pageSlug: 'home' },
    },
    {
      path: '/about',
      name: 'about',
      component: ContentPageView,
      meta: { pageSlug: 'about' },
    },
    {
      path: '/activities',
      name: 'activities',
      component: ContentPageView,
      meta: { pageSlug: 'activities' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContentPageView,
      meta: { pageSlug: 'contact' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundPage,
      beforeEnter: (to) => {
        // Extra guard: even if someone adds a soft route later, unlisted slugs stay blocked
        const candidate = to.path.replace(/^\//, '').split('/')[0]
        if (candidate && isAllowlistedPage(candidate)) {
          return true
        }
        return true
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
