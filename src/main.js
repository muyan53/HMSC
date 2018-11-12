import Vue from 'vue';
import App from './App.vue';
// 引入路由模块
import VueRouter from 'vue-router';
// 引入index组件
import index from './components/index.vue';
// 导入ui框架
import ElementUI from 'element-ui';
// 导入css
import 'element-ui/lib/theme-chalk/index.css';
// 导入懒加载
import VueLzyload from 'vue-lazyload';
import path from 'path';

// 引入公共的css
import './assets/statics/site/css/style.css';

// 使用路由中间件
Vue.use(VueRouter);
// 使用ui中间件
Vue.use(ElementUI);
// 使用懒加载中间件
Vue.use(VueLzyload,{
  loading:path.join(__dirname,'./assets/statics/img/01.gif')
})

// 实例化路由组件
const router = new VueRouter({
  routes:[
    {
      // 重定向
      path:'/',
      redirect:'/index'
    },
    {
      path:'/index',
      component:index
    }
  ]
})



Vue.config.productionTip = false

new Vue({
  // 路由中间件挂载到vue
  router,
  // 渲染App组件
  render: h => h(App)
}).$mount('#app')
