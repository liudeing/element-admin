/**
 * Created by ldp on 2016/12/15.
 */
import {SET_PROGRESS} from '../types';

const state = {
  rate: 0
};

const mutations = {
  [SET_PROGRESS](state, action) {
    state.rate = action.rate;
  }
};

export default {
  state,
  mutations
};
