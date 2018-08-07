
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



import Vue from 'vue'

import axios from 'axios'
import App from './App.vue'
import store from './store'
import router from './router'
import VueSocketio from 'vue-socket.io'
import "quasar-framework/dist/umd/quasar.ios.css";
import 'animate.css/animate.min.css'
import Vuetify from 'vuetify'


import Quasar, { QLayout, QInput, QBtn, QChatMessage, QPage, QPageContainer, QToolbar, QToolbarTitle, QLayoutHeader,


QLayoutDrawer, QLayoutFooter, QScrollArea, QListHeader, QItem, QItemSide, QItemMain, QList,  QItemSeparator, QItemTile,
QUploader, QScrollObservable, scroll, QField, QChipsInput, QChip, QPopover, CloseOverlay, QSpinnerDots, QInnerLoading, QSpinnerGears, QCard, QCardSeparator, QSpinner, QVideo
 } from "quasar-framework/dist/quasar.mat.esm";

 import QDrawer from "quasar-framework/dist/umd/quasar.ios.css";
Vue.use(Quasar, { components: [QLayout, QInput, QBtn, QChatMessage, QPage, QPageContainer, QToolbar, QToolbarTitle, QLayoutHeader,

QLayoutDrawer, QDrawer, QLayoutFooter, QScrollArea, QListHeader, QItem, QItemSide, QItemMain, QList, QItemSeparator, QItemTile, QUploader,
 QScrollObservable, scroll, QField, QChipsInput, QChip, QPopover, CloseOverlay, QSpinnerDots, QInnerLoading, QSpinnerGears, QCard, QCardSeparator, QSpinner, QVideo


] });

Vue.directive('close-overlay', CloseOverlay);
Vue.use(Vuetify);
Vue.use(VueSocketio, 'http://localhost:8890');

Vue.config.devtools = process.env.NODE_ENV != 'production';
Vue.config.silent = process.env.NODE_ENV == 'production';




axios.interceptors.request.use(function(config){

if(localStorage.getItem('token')){

  config.headers.Authorization = 'Bearer '+ localStorage.getItem('token');


}


  return config;
}, function(error){


    return Promise.reject(error);


});

axios.interceptors.response.use(function (response) {
    // Do something with response data

    return response

  }, function (error) {

    if(error.response.status === 400 || error.response.status === 401 || error.response.status === 403){

      store.dispatch('studentLogOut')
    }
    // Do something with response error
    return Promise.reject(error);
  });




const app = new Vue({

el: '#app',
template: '<app></app>',
components: {App},
router,
store














});
