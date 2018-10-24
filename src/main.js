import Vue from 'vue'
import App from './App.vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 引入index组件
import index from './components/index.vue'

// 使用路由中间件
Vue.use(VueRouter);

// 实例化路由组件
const router = new VueRouter({
  routes:[
    {
      path:'/index',
      component:index
    }
  ]
})

// 引入公共的css
import './assets/statics/site/css/style.css';

Vue.config.productionTip = false

new Vue({
  // 路由中间件挂载到vue
  router,
  // 渲染App组件
  render: h => h(App)
}).$mount('#app')
