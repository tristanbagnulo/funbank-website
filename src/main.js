// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import {createApp} from 'vue'
import App from './App.vue'
// import Vue from 'vue';
//When you go to a folder and it has an "index" file in it
//it will automatically import it. No need to add "/index.js"
//the below import statement.
import router from './router';

// import router from './router'
// import store from './store'

// Vue.use(VueRouter);

createApp(App).use(router).mount('#app')

// use(store).use(router)

var history = require('connect-history-api-fallback'); 

// var connect = require('connect');

// var app = connect()
//   .use(history())
//   .listen(3000);
