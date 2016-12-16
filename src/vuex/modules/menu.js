/**
 * Created by ldp on 2016/12/15.
 */
import { SET_MENU } from '../types'

const state = {
  current: null
}

const mutations = {
  [SET_MENU](state, action) {
    state.current = action.current
  }
}

export default {
  state,
  mutations
}
