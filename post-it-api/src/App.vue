<template>
  <v-app>
    <NavBar/>
    <v-main class="app-body">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/Navbar.vue'

export default {
  name: 'App',

  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>

.app-body {
  background: #e8f7f0;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6rem;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

</style>
