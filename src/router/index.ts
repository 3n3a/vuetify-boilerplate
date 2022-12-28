// Composables
import { createRouter, createWebHistory } from 'vue-router'

// Components
import DefaultLayout from '@/layouts/default/Default.vue'
import Home from '@/views/Home.vue'
import Second from '@/views/TestSecond.vue'

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          isMenuItem: true,
          inactiveIcon: 'mdi-home-outline',
          activeIcon: 'mdi-home'
        }
      },
      {
        path: 'second',
        name: 'Second',
        component: Second,
        meta: {
          isMenuItem: true,
          inactiveIcon: 'mdi-flask-empty-outline',
          activeIcon: 'mdi-flask-empty'
        }
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
