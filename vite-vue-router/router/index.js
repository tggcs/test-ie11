// import Vue from 'vue'
// import VueRouter from 'vue-router'
import routers from './routes'
import routersIe from './routes-ie'
// console.log('Vue', Vue, VueRouter)
Vue.use(VueRouter)

console.log('VueRouter - VITE_IE', VITE_IE)
const router = new VueRouter({
    routes: VITE_IE ? routersIe : routers
})

export default router