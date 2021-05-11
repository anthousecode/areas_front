import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _fe0f61c8 = () => interopDefault(import('../pages/About.vue' /* webpackChunkName: "pages/About" */))
const _9e713ad8 = () => interopDefault(import('../pages/Contacts.vue' /* webpackChunkName: "pages/Contacts" */))
const _14c2e10e = () => interopDefault(import('../pages/Dynamic.vue' /* webpackChunkName: "pages/Dynamic" */))
const _b7db92be = () => interopDefault(import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */))
const _79dac5b8 = () => interopDefault(import('../pages/Infrastructure.vue' /* webpackChunkName: "pages/Infrastructure" */))
const _30854994 = () => interopDefault(import('../pages/News.vue' /* webpackChunkName: "pages/News" */))
const _684ec5ca = () => interopDefault(import('../pages/Sales.vue' /* webpackChunkName: "pages/Sales" */))
const _293e0a01 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _fe0f61c8,
    name: "About"
  }, {
    path: "/Contacts",
    component: _9e713ad8,
    name: "Contacts"
  }, {
    path: "/Dynamic",
    component: _14c2e10e,
    name: "Dynamic"
  }, {
    path: "/Gallery",
    component: _b7db92be,
    name: "Gallery"
  }, {
    path: "/Infrastructure",
    component: _79dac5b8,
    name: "Infrastructure"
  }, {
    path: "/News",
    component: _30854994,
    name: "News"
  }, {
    path: "/Sales",
    component: _684ec5ca,
    name: "Sales"
  }, {
    path: "/",
    component: _293e0a01,
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
