import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
		this.$store.commit('initializeStore');
	},
  vuetify,
  render: h => h(App)
}).$mount('#app')

store.subscribe((mutation, state) => {
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});
