import Vue from "vue";
import Router from "vue-router";
import ShowsList from "./components/ShowsList.vue";
import DetailsView from "./views/DetailsView.vue";
import RootView from "./views/RootView.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/shows/:id",
      name: "details",
      component: DetailsView
    },
    {
      path: "/",
      redirect: "/shows",
      component: RootView,
      children: [
        {
          path: "shows",
          name: "shows",
          meta: {
            title: "TV Show Store"
          },
          component: ShowsList
        },
        {
          name: "favorites",
          path: "favorites",
          meta: {
            title: "Favorites"
          },
          component: ShowsList,
          props: () => ({
            filter: shows => shows.filter(show => show.user.favorited)
          }),
          alias: "/starred"
        }
      ]
    }
  ]
});
