import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

const index = r => require.ensure([], () => r(require('../page/index/index')));
const gameclasify = r => require.ensure([], () => r(require('../page/gameclasify/gameclasify')));
const square = r => require.ensure([], () => r(require('../page/square/square')));
const signin = r => require.ensure([], () => r(require('../page/registration/signin')));
const personal = r => require.ensure([], () => r(require('../page/personal/personal')));
const registration = r => require.ensure([], () => r(require('../page/registration/registration')));
Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/home',
      component: index
    },
    {
      path: '/gameclasify',
      name: 'gameclasify',
      component: gameclasify
    },
    {
      path: '/square',
      name: 'square',
      component: square
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: '/signin',
      component: signin,
    },
    {
      path: '/registration',
      component: registration,
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/signin',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})
export default router
