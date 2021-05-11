import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3154fe06 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _226e536a = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _20af7d78 = () => interopDefault(import('../pages/Dynamic.vue' /* webpackChunkName: "pages/Dynamic" */))
const _a00259ea = () => interopDefault(import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */))
const _1f89d50c = () => interopDefault(import('../pages/Infrastructure.vue' /* webpackChunkName: "pages/Infrastructure" */))
const _67c2156a = () => interopDefault(import('../pages/News.vue' /* webpackChunkName: "pages/News" */))
const _7c354c05 = () => interopDefault(import('../pages/Sales.vue' /* webpackChunkName: "pages/Sales" */))
const _4cca8e2a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _3154fe06,
    name: "About"
  }, {
    path: "/Contacts",
    component: _226e536a,
    name: "Contacts"
  }, {
    path: "/Dynamic",
    component: _20af7d78,
    name: "Dynamic"
  }, {
    path: "/Gallery",
    component: _a00259ea,
    name: "Gallery"
  }, {
    path: "/Infrastructure",
    component: _1f89d50c,
    name: "Infrastructure"
  }, {
    path: "/News",
    component: _67c2156a,
    name: "News"
  }, {
    path: "/Sales",
    component: _7c354c05,
    name: "Sales"
  }, {
    path: "/",
    component: _4cca8e2a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
