import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
//const NoFound = { template: '<div>No Found</div>'}

export default [
    // your routes here
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  
    // define your 404 route
    {
      path: '/:pathMatch(.*)*',
      name: 'notfound',
      component: () => import('@/views/NotFound.vue'),
      //component: NoFound,
    },
  ]
  