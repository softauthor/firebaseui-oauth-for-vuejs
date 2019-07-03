// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false


const firebaseConfig = {
  apiKey: "AIzaSyAnodaToYjKVNfycKidyKPBbd4JL7hTbsw",
  authDomain: "vue-stripe-firebase.firebaseapp.com",
  databaseURL: "https://vue-stripe-firebase.firebaseio.com",
  projectId: "vue-stripe-firebase",
  storageBucket: "vue-stripe-firebase.appspot.com",
  messagingSenderId: "443648604087",
  appId: "1:443648604087:web:61e60d56ab98a274"
};
firebase.initializeApp(firebaseConfig);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})
