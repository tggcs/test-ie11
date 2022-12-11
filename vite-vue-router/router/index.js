// import Vue from 'vue'
// import VueRouter from 'vue-router'
import routers from './routes'
// console.log('Vue', Vue, VueRouter)
Vue.use(VueRouter)

const router = new VueRouter({
    routes: routers
})

export default router