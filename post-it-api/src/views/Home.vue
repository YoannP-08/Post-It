<template>
  <div class="home">
    <v-text-field
        class="ml-5"
        label="Search Notes"
        name="search"
        style="width:30%"
        v-model="search"
        >
    </v-text-field>
    <AddNewNote/>
    <AllNotes v-bind:search="this.search"/>
  </div>
</template>

<script>
// @ is an alias to /src
import AddNewNote from "@/components/AddNewNote"
import AllNotes from "@/components/AllNotes.vue"

export default {
  name: 'Home',
  data () {
    return {
      search: "",
    }
  },
  components: {
    AddNewNote,
    AllNotes,
  }
}
</script>

<style>

</style>
