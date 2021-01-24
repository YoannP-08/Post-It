import Vue from 'vue';
import Vuex from 'vuex';
import notesList from './modules/notesList';

// Load Vuex
Vue.use(Vuex)

// Create Store
export default new Vuex.Store({
  name: 'store',
  mutations: {
		initializeStore(state) {
			// Check if ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		}
	},
  modules: {
    notesList,
  },
});



