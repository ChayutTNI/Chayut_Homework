import Vue from "vue";
import Router from "vue-router";
import Profile from "../components/Profile";
import Contact from "../components/Contact";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/Profile",
      component: Profile
    },
    {
      path: "/Contact",
      component: Contact
    }
  ]
});
// rgb(51, 50, 50)
document.body.style.backgroundColor = "rgb(51, 50, 50)";
