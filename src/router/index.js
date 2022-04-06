import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      title: 'Dashboard'
    }
  },
  {
    path: '/guest-list',
    name: 'GuestList',
    component: () => import('@/views/GuestList.vue'),
    meta: {
      title: 'Guest List'
    }
  },
  {
    path: '/guest-details',
    name: 'GuestDetails',
    component: () => import('@/views/GuestDetails.vue'),
    meta: {
      title: 'Guest Details'
    }
  },
  {
    path: '/concierge',
    name: 'Concierge',
    component: () => import('@/views/Concierge.vue'),
    meta: {
      title: 'Concierge'
    }
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import('@/views/Rooms.vue'),
    meta: {
      title: 'Rooms'
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

export default router
