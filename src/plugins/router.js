import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
let router = new VueRouter({mode: "history", routes: []});

router.beforeEach((to, from, next) => {
    const isAuthorized = Vue.$services.auth.isAuthorized;
    if (to.matched.some(m => m.meta.requiresAuth) && !isAuthorized) {
        next({name: "auth"});
        return;
    }
    if (to.name === "auth" && isAuthorized) {
        next({name: "main"});
        return;
    }

    next()
});


export default router;
