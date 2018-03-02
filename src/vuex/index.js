import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  test:'初始的值'
}

const mutations = {
  changeTest(state,data){
    state.test = data
  }
}

export default new Vuex.Store({
  state,
  mutations
})