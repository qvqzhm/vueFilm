import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:()=>import('@/views/Home'),
    children:[
      {
        path:'cinema',
        component:()=>import('@/views/Home/Cinema'),
        meta:{
          isActive:2,
          isCity:true,
          isHome:true
        }
      },
      {
        path:'hot',
        component:()=>import('@/views/Home/Hot'),
        meta:{
          isActive:1,
          isCity:true,
          isHome:true
        }
      },
      {
        path:'comming',
        component:()=>import('@/views/Home/Comming'),
        meta:{
          isActive:3,
          isCity:true,
          isHome:true
        }
      },
      {
        path:'/',
        redirect:'hot'
      },
    ]
  },

  {
    path:'/detail/:id',
    name:'detail',
    component:()=>import('@/views/Detail'),
    meta:{
      isCity:false
    }
  },

  {
    path:'/city',
    component:()=>import('@/views/City'),
    meta:{
      isCity:false
    }
  },

  {
    path:'/search',
    component:()=>import('@/views/Search'),
    meta:{
      isSearch:true,
      isCity:true
    }
  },

  {
    path:'/video',
    component:()=>import('@/views/Video'),
    meta:{
      isSearch:false,//是否头部显示左侧箭头
      isCity:true,//是否显示头部
      isHome:true//是否显示底部
    },
    children: [
      {
        path:'tuijian',
        component:()=>import('@/views/Video/TJ'),
        meta:{
          isSearch:false,
          isCity:true,
          isHome:true,
          acVdo:0,
          isVideo:true
        }
      },
      {
        path:'hotread',
        component:()=>import('@/views/Video/HotRead'),
        meta:{
          isSearch:false,
          isCity:true,
          isHome:true,
          acVdo:1,
          isVideo:true
        }
      },
      {
        path:'new',
        component:()=>import('@/views/Video/New'),
        meta:{
          isSearch:false,
          isCity:true,
          isHome:true,
          acVdo:2,
          isVideo:true
        }
      },
      {
        path:'qsee',
        component:()=>import('@/views/Video/QSee'),
        meta:{
          isSearch:false,
          isCity:true,
          isHome:true,
          acVdo:3,
          isVideo:true
        }
      },
      {
        path:'ji',
        component:()=>import('@/views/Video/JI'),
        meta:{
          isSearch:false,
          isCity:true,
          isHome:true,
          acVdo:4,
          isVideo:true
        }
      },
      {
        path: 'see',
        component:()=>import('@/views/Video/See'),
        meta:{
          isSearch:false,
          isCity:false,
          isHome:false,
          isVideo:false
        }
      },
      {
        path:'/',
        redirect: 'tuijian'
      },
    ]
  },

  {
    path:'/minvideo',
    component:()=>import('@/views/MinVideo'),
    meta:{
      isSearch:false,
      isCity:true,
      isHome:true,
      isMv:false
    },
    children: [
      {
        path: 'mv',
        component:()=>import('@/views/MinVideo/MVideo'),
        meta:{
          isSearch:false,
          isCity:false,
          isHome:false,
          isMv:true
        }
      },
    ]
  },

  {
    path:'/login',
    component:()=>import('@/views/Login'),
    meta:{
      isSearch:false,
      isCity:false,
      isHome:false,
    },
    children:[
      {
        path:'register',
        component:()=>import('@/views/Login/Register'),
        meta:{
          isRegister:true
        }
      }
    ]
  },

  {
    path:'/my',
    component:()=>import('@/views/My'),
    meta:{
      isSearch:false,
      isCity:true,
      isHome:true,
    }
  },

  {
    path:'*',
    redirect:'/home'
  },
]

const router = new VueRouter({
  routes
})

export default router
