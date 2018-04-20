<template>
  <div>
      <show-card
          v-for="show in filteredShows"
          :key="show.id"
          :id="show.id"
          :title="show.title"
          :description="show.description"
          :status="show.status"
          :creation-date="show.creation"
          :nb-seasons="show.seasons"
          :image="show.images.poster"
          :is-favorited="show.user.favorited"
          :genres="show.genres"
          @toggle-favorite="favoriteAndRedirect(show)"
      ></show-card>
    </div>
</template>

<script>
import axios from "axios";
import ShowCard from "../components/ShowCard";

export default {
  props: {
    shows: {
      type: Array,
      default: () => []
    },

    filter: {
      type: Function,
      default: shows => shows
    }
  },

  components: {
    ShowCard
  },

  computed: {
    filteredShows() {
      return this.filter ? this.filter(this.shows) : this.shows;
    }
  },

  methods: {
    favoriteAndRedirect(show) {
      axios
        .post(`http://localhost:4000/rest/shows/${show.id}/favorites`)
        .then(response => {
          show.user.favorited = response.data.user.favorited;
          if (show.user.favorited) {
            this.$router.push({ name: "details", params: { id: show.id } });
          }
        });
    }
  }
};
</script>
