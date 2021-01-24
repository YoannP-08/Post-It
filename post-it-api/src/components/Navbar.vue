<template>
    <v-app-bar
        app
        class="blue-grey darken-1"
        dark
        >
        <div class="d-flex align-center">
            <v-img
            alt="Post It Logo"
            class="shrink mr-2"
            contain
            src="../assets/logo.png"
            transition="scale-transition"
            width="40"
            />

            <h1>The Post-It App</h1>
        </div>

        <v-spacer></v-spacer>

        <router-link class="text-decoration-none" to="/"><v-btn color="blue-grey darken-1" depressed medium>Home</v-btn></router-link>
        <router-link class="text-decoration-none" to="/about"><v-btn color="blue-grey darken-1" depressed medium>About</v-btn></router-link>

    </v-app-bar>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => ({
        drawer: false,
        group: null,
    }),

}
</script>

<style>

h1 {
    font-size: 1.2rem;
}

</style>