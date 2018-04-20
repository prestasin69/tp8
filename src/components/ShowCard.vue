<template>
  <div class="card card-result">
        <div class="card-header">
            <p class="card-header-title"><router-link :to="{ name: 'details', params: { id } }">{{ title }}</router-link></p>
            <a class="card-header-icon">
                <span class="icon" :class="{ 'is-favorite': isFavorited }" @click="toggleFavorite">
                    <i class="fa fa-star"></i>
                </span>
            </a>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-128x200">
                        <img :src="image" alt="Image">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="">{{ subtitle }}</p>
                    <p class="tags"><span class="tag" :key="genre" v-for="genre in genres">{{ genre }}</span></p>
                    <p class="tags"><span class="tag is-primary">{{ status }}</span></p>
                    <div class="content" @click="toggleDescription()">
                        <span v-if="longDescription">{{ description }}</span>
                        <span v-else>{{ description | truncate(35) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: [Number, String],
      default: null
    },
    title: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    status: {
      type: String,
      default: ""
    },
    creationDate: {
      type: [Number, String],
      default: 0
    },
    nbSeasons: {
      type: [Number, String],
      default: 0
    },
    image: {
      type: String,
      default: ""
    },
    isFavorited: {
      type: Boolean,
      default: false
    },
    genres: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      longDescription: false
    };
  },

  methods: {
    toggleFavorite() {
      this.$emit("toggle-favorite");
    },
    toggleDescription() {
      this.longDescription = !this.longDescription;
    }
  },

  computed: {
    subtitle() {
      return `Created in ${this.creationDate} - ${this.nbSeasons} seasons`;
    }
  }
};
</script>
