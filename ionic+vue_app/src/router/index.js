import { createRouter, createWebHistory } from '@ionic/vue-router';
import ItemListPage from '../pages/ItemListPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/itemlistpage'
  },
  {
    path: '/itemlistpage',
    name: 'itemlistpage',
    component: ItemListPage
  },
  {
    path: '/item/:id',
    component: () => import('../pages/ItemDetailPage.vue')
  },
  {
    path: '/item/add',
    component: () => import('../pages/AddItemPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
