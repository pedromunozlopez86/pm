import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import firebase from 'firebase'
import { initializeApp } from "firebase/app";
import VueMeta from 'vue-meta'

Vue.use(VueMeta)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCVAz4gnXeoQbNSt8v76xY2snqv0yZr0xE",
  authDomain: "prueba-simplex.firebaseapp.com",
  projectId: "prueba-simplex",
  storageBucket: "prueba-simplex.appspot.com",
  messagingSenderId: "878640069260",
  appId: "1:878640069260:web:47105ac98ed92c4bae99a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  vuetify,
  axios,
  firebase,
  render: h => h(App)
}).$mount('#app')
