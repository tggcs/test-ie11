export default [{
    path: "/",
    name: "home",
    component: () => import("../src/pages/home.vue")
}, {
    path: "/home",
    name: "home",
    component: () => import("../src/pages/home.vue")
}, {
    path: "/about",
    name: "about",
    component: () => import("../src/pages/about.vue")
}, {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../src/pages/dashboard.vue")
}]