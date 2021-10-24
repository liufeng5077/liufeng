import Vue from 'vue'
import Router from 'vue-router'
import login from "../views/login";
import index from "../views/index.vue";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path:'/index',
      name:'index',
      component: index,
      children:[//二级路由
        {
          path:'/index',
          name:'index',
          component:()=>import('../components/index')
        }
      ]
    }
  ]
})
