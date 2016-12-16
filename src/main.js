// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import App from './App'

import routes from './router/routes'
import alias from './router/alias'
import { SET_MENU, SET_PROGRESS } from './vuex/types'

// Router
Vue.use(VueRouter)

const router = new VueRouter({
  history: false,
  linkActiveClass: 'active',
  saveScrollPosition: true
})
router.map(routes)
router.alias(alias)
router.beforeEach(transition => {
  if (transition.to.auth && !store.state.auth.token) {
    // transition.abort()
    transition.redirect('/login')
  } else {
    transition.next()
  }

  // 触发进度条
  if (transition.to.name !== 'login') {
    store.dispatch(SET_PROGRESS, { rate: 1 })
  }
})
router.afterEach(transition => {
  store.dispatch(SET_MENU, { current: transition.to.parent })
  window.scrollTo(0, 0)
})

// Filters
// Vue.filter('date', filters.dateFilter);

// router <-> vuex
sync(store, router)

router.start(App, 'app')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
