<template>
    <v-card
    class="yellow lighten-4 rounded-xl"
    height="100%"
    style="margin-bottom: 1rem">
        <div
        class="d-flex justify-space-between"
        >
            <v-card-title style="text-decoration:underline">
                {{ note.title }} 
            </v-card-title>
            <v-btn
                @click="deleteNote(note._id)"
                class="red lighten-2"
                elevation="10"
                justify-content
                right
                top
                x-small
            >x
            </v-btn>
        </div>
        <v-card-text class="text-description orange lighten-3 d-flex justify-space-between"
        v-for="(tasks, index) in note.content" :key="tasks.id"
        > 
            {{ tasks }}

            <v-btn
            @click="removeTask(index)"
            icon
            x-small
            >
                <v-icon
                color="#616161">
                    {{ icons.mdiDelete }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                class="green lighten-3 mt-2 mb-2 ml-2 rounded-pill"
                elevation="12"
                small
                v-bind="attrs"
                v-on="on"
                >
                Add New Task
                </v-btn>
            </template>

                <v-card>
                    <v-card-title>
                    <span class="headline">Add a new Task</span>
                    </v-card-title>
                    <v-card-text>
                    <v-container>
                        <form @submit="onSubmit(note)">
                            <v-textarea
                                counter
                                clearable
                                label="Task Description"
                                name="task"
                                v-model="newTask"
                            ></v-textarea>
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
                                Add Task
                            </v-btn>
                        </v-card-actions>
                        </form>
                        </v-container>
                        </v-card-text>
                </v-card>
            </v-dialog>
    
    </v-card>
</template>

<script>
import { mapActions } from "vuex";
import { mdiDelete } from '@mdi/js'
import axios from 'axios';


export default {
    props: ["note"],
    name: "AllTasks",
    data() {
        return {
            icons: { mdiDelete },
            dialog: false,
            newTask: '',
        }
    },
    methods: {
        ...mapActions(["deleteNote", "updateNote", "deleteTask"]),
        async onSubmit(note) {
            event.preventDefault();
            let parsedTask = JSON.parse(JSON.stringify(note.content));
            
            if (this.newTask === ""){
                const response = await axios.get(
                    'http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote'
                );
                this.newTask = response.data.starWarsQuote
            }

            parsedTask.push(this.newTask);

            const updNote = {
                id: note._id,
                title: note.title,
                content: parsedTask,
            }

            this.updateNote(updNote)
            this.newTask = '';
        },

        removeTask(index){
            let newContent = this.note.content[index];
            let newArr = this.note.content.filter(cont => cont != newContent)
            const delTask ={
                id:this.note._id,
                title:this.note.title,
                content: newArr,
            }
            this.deleteTask(delTask)
        }
    },
}
</script>

<style>

/* .style-card-body {
    border:1px solid white;
    border-radius: 2rem;
    box-shadow: 0.1rem 0.3rem;
} */

.text-description{
    border: 0.1rem solid #696969;
    border-radius: 1rem;
    font-size: 0.8rem;
    padding: 0.25rem;
    margin-top: 1rem;
    margin-left: 0.5rem;
    width: 95%;
    word-break: break-all;
}

</style>