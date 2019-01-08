import Vue from 'vue'
import {auth} from '@/fire.js'


import App from './App.vue'
import router from './router'



Vue.config.productionTip = false

let app= '';

  auth.onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
    router,
    render: h => h(App)
    }).$mount('#app');
  }
});





