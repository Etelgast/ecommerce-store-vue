import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/app/views/HomeView.vue'

function checkAuth(to, from, next) {
  if (localStorage.getItem('ac-token')) {
    next({ name: 'account' })
  } else {
    next()
  }
}

const routes = [
  {
    path: '/',
    redirect: { path: '/home' }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',

    component: () => import('@/app/views/ShopView.vue'),
    children: [
      {
        path: '',
        name: 'shop',
        component: () => import('@/products/views/ProductShopView.vue')
      },
      {
        path: 'card/:id',
        name: 'card',
        component: () => import('@/products/views/FullProductCardView.vue')
      }
    ]
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/app/views/BlogView.vue')
  },
  {
    path: '/blog/article/:id',
    name: 'article',
    component: () => import('@/products/views/ArticleBlogView.vue')
  },
  {
    path: '/drawer',
    name: 'drawer',
    component: () => import('@/app/views/ShopCartView.vue')
  },
  {
    path: '/drawer/checkout',
    name: 'checkout',
    component: () => import('@/products/views/CheckoutView.vue')
  },
  {
    path: '/search',
    name: 'search'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/app/views/LoginView.vue'),
    beforeEnter: checkAuth
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('@/app/views/PrivacyPolicyView.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('@/app/views/ContactUsView.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('@/app/views/AboutView.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('@/app/views/AccountInfoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    document.getElementById('app').scrollIntoView()
  }
})

export default router
