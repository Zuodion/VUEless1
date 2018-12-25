import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const RECEIVE_QUOTE = 'RECEIVE_QUOTE';

const state = {
  quote: ''
}

const getters = {
    quote: state => state.quote, 
}

const actions = {
  getQuote({commit}) {
    axios.get('http://quotes.rest/qod.json').then((response) => {
    const quote = response.data.contents.quotes[0];
    commit(RECEIVE_QUOTE, quote)
    })
  },
}

const mutations = {
  [RECEIVE_QUOTE](state, quote) {
    state.quote = quote;
  },
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});

export default store;
