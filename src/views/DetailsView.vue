<template>
    <div v-if="show">
      <h1 class="title">{{ show.title }}</h1>

      <!-- The card -->
      <show-card
          :id="show.id"
          :title="show.title"
          :description="show.description"
          :status="show.status"
          :creation-date="show.creation"
          :nb-seasons="show.seasons"
          :image="show.images.poster"
          :is-favorited="show.user.favorited"
          :genres="show.genres"
          @toggle-favorite="show.user.favorited = !show.user.favorited"
      ></show-card>
    </div>
</template>

<script>
import axios from "axios";
import ShowCard from "../components/ShowCard";

export default {
  components: {
    ShowCard
  },

  data() {
    return {
      show: null
    };
  },

  beforeRouteEnter: (to, from, next) => {
    axios
      .get(`http://localhost:4000/rest/shows/${to.params.id}`)
      .then(response => {
        next(vm => {
          vm.show = response.data;
        });
      });
  }
};
</script>

<style>
</style>
