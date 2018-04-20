<template>
  <div>
    <h1 class="title">{{ $route.meta.title }}</h1>
    <div class="field">
        <label class="label">Search {{ search }}</label>
        <div class="control">
            <input class="input" type="text" v-focus v-model="search" placeholder="Game of thrones, Breaking bad, ...">
        </div>
    </div>

    <router-view :shows="filteredShows"></router-view>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      search: "",
      shows: [],
      loading: true
    };
  },

  computed: {
    filteredShows() {
      return this.shows.filter(
        show =>
          show.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      );
    }
  },

  beforeRouteEnter: (to, from, next) => {
    axios.get("http://localhost:4000/rest/shows").then(response => {
      next(vm => {
        vm.shows = response.data;
      });
    });
  }
};
</script>

<style>
</style>
