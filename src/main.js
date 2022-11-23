import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import Video from "video.js";
import 'video.js/dist/video-js.css'


//验证
import slideVerify from "vue-monoplasty-slide-verify";
Vue.use(slideVerify);

import 'animate.css';
import * as API from "../../vuecli/src/api";

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$video = Video
  }
}).$mount('#app')
