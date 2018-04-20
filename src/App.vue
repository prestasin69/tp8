<template>
  <div id="app">
    <div class="container">
        <nav class="navbar">
            <div class="navbar-brand">
                <router-link to="/" class="navbar-item">
                    <span class="icon">
                        <i class="fa fa-arrow-left"></i>
                    </span>
                </router-link>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link :to="{ name: 'shows' }" class="navbar-item" active-class="is-active">
                        Search
                    </router-link>
                    <router-link :to="{ name: 'favorites' }" class="navbar-item" active-class="is-active">
                        Favorite
                    </router-link>
                </div>
            </div>
        </nav>
      </div>
      <section class="hero is-primary">
        <div class="hero-body">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
      </section>
  </div>
</template>
