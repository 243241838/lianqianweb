import Vue from 'vue'
import axios from 'axios'
// import wx from 'wx';
import VueRouter from 'vue-router';
// import VueLazyload from 'vue-lazyload'
// import VueBus from 'vue-bus'
// Vue.use(VueLazyload)
// Vue.use(vueResource)
// Vue.use(VueBus)
Vue.use(VueRouter);
// 导入全局css,scss路径在webpack.base.confi.js配置了别名
module.exports = {
    Vue, axios, VueRouter
}
