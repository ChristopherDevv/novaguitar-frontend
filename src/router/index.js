import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import { useAuthStore } from '../stores/auth'
import { onMounted } from 'vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },{
          path: 'shop',
          name: 'shop',
          component: () => import('../views/ShopView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/BlogView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: 'guitar/:id',
          name: 'guitar',
          component: () => import('../views/GuitarView.vue')
        },
        {
          path: '/user',
          redirect: '/user/account',
          name: 'user',
          component: () => import('../views/user/UserLayout.vue'),
          meta: {requiresAuth: true},
          children: [
            {
              path: '/user/account',
              name: 'user-account',
              component: () => import('../views/user/Account.vue')
            },
            {
              path: '/user/cart',
              name: 'user-cart',
              component: () => import('../views/user/Cart.vue')
            },
          ]
        },
        {
          path: '/admin',
          redirect: '/admin/guitar',
          name: 'admin',
          component: () => import('../views/admin/AdminLayout.vue'),
          meta: { requiresAuth: true, requiresAdmin: true },
          children: [
            {
              path: '/admin/guitar',
              name: 'admin-guitar',
              component: () => import('../views/admin/AdminView.vue')
            },
            {
              path: '/admin/new',
              name: 'new-guitar',
              component: () => import('../views/admin/NewGuitar.vue')
            },
            {
              path: '/admin/update/:id',
              name: 'update-guitar',
              component: () => import('../views/admin/UpdateGuitar.vue')
            },
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { top: 0 }
  }
})

  router.beforeEach((to, from, next) => {
      //verifica si la ruta a la que el usuario está intentando acceder requiere autenticación. Si la ruta tiene un meta campo requiresAuth que es verdadero, entonces requiresAuth será verdadero.
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin)
    const currentUser = JSON.parse(localStorage.getItem('authUser'))
  
    if (requiresAuth && !currentUser) {
      next('/login')
    } else if (requiresAuth && currentUser) {
      if (requiresAdmin && !currentUser.user.is_admin) {
        next('/user/account')
      } else {
        next()
      }
    } else if ((to.path === '/login' || to.path === '/register') && currentUser) {
      // Si el usuario ya está autenticado y trata de acceder a las rutas de login o register, se redirige a la ruta de user-account
      next('/user/account')
    } else {
      next()
    }
  })

export default router

/* router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = localStorage.getItem('authUser')

  if (requiresAuth && !currentUser) {
    next('/login')
  } else if (requiresAuth && currentUser) {
    next()
  } else {
    next()
  }
}) */