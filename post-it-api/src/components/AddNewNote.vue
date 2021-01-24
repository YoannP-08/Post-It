<template>
    <div class="d-flex justify-end">
        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="green lighten-2 mt-2 mb-2 mr-3 rounded-pill"
                elevation="12"
                medium
                v-bind="attrs"
                v-on="on"
                >
                Add New Note
                </v-btn>
            </template>

                <v-card>
                    <v-card-title>
                    <span class="headline">Add New Note</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <form @submit="onSubmit">
                            <v-text-field
                                label="Note title"
                                name="title"
                                v-model="title"
                            ></v-text-field>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                type="submit"
                                @click="dialog = false"
                            >
                                Add
                            </v-btn>
                        </v-card-actions>
                        </form>
                        </v-container>
                        </v-card-text>
                </v-card>
            </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: "NewNote",
    data() {
        return {
            dialog: false,
            title: '',
        }
    }, 
    methods: {
        ...mapActions (['addNote']),
        onSubmit(event) {
            event.preventDefault();
            this.addNote(this.title);
            this.title = '';
        },
    },

}
</script>


<style>

</style>