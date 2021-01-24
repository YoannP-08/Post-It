<template>
    <div>
        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="note in filteredNotes" :key="note.id"
                    :cols="flex=4"
                    >

                    <AllTasks v-bind:note="note"/>

                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import AllTasks from "@/components/AllTasks";
import { mapGetters, mapActions } from "vuex";

export default {
    props: { search: String },
    name: "AllNotes",
    components: {
        AllTasks,
    },
    methods: {
        ...mapActions (['fetchAllNotes']),
    },
    computed: {
        ...mapGetters (['allNotes']),
        filteredNotes: function(){ return this.allNotes.filter((note) => {return note.title.match(this.search)});},
    },
    created () {
        this.fetchAllNotes();
    }
}
</script>

<style>


</style>