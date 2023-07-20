import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthenticationView.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/WatchVideoView.vue')
    },
    {
      path: '/@:channelId',
      name: 'channel',
      component: () => import('../views/ChannelView.vue')
    }
  ]
})

export default router
