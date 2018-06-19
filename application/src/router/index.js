import Vue from "vue";
import Router from "vue-router";
import * as Auth from "@/components/pages/Authentication";

// Pages
import Home from "@/components/pages/Home";
import Authentication from "@/components/pages/Authentication/Authentication";

// Global Components
import Header from "@/components/Header";
import List from "@/components/List/List";

Vue.component("app-header", Header);
Vue.component("list", List);

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/login",
      name: "Authentication",
      component: Authentication
    },
    {
      path: "/",
      name: "Home",
      components: {
        default: Home,
        header: Header,
        list: List
      },
      meta: {
        requiredAuth: true
      }
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/login") {
    if (Auth.default.user.authenticated) {
      next();
    } else {
      router.push("/login");
    }
  } else {
    next();
  }
});

export default router;
