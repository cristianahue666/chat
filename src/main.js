import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCtQWWqHi0Jr9KntlH7-FW_p2YY-cTrH-M",
  authDomain: "vue-firebase-cris.firebaseapp.com",
  databaseURL: "https://vue-firebase-cris.firebaseio.com",
  projectId: "vue-firebase-cris",
  storageBucket: "vue-firebase-cris.appspot.com",
  messagingSenderId: "469947355450"
};

firebase.initializeApp(config);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
