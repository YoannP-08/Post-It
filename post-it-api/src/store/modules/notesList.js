import axios from 'axios';


const state = {
    notesData: [], 
};

const getters = {
    allNotes: (state) => state.notesData
};

const actions = {
    async fetchAllNotes ({ commit }){
        const response = await axios.get(
            'http://postit.wac.under-wolf.eu/notes'
        );
        commit('setAllNotes', response.data.notes)
    },
    async addNote ({ commit }, title) {
        let response = await axios.post(
            'http://postit.wac.under-wolf.eu/notes',
            { title, content: [] }
        );
        response = await axios.get(`http://postit.wac.under-wolf.eu/notes/${response.data.note_id}`);
            commit('newNote', response.data.note)
    },
    async deleteNote ({ commit }, id) {
        await axios.delete(`http://postit.wac.under-wolf.eu/notes/${id}`);
        
        commit ('removeNote', id);
    },
    async updateNote ({ commit }, updNote) {
        await axios.put(
            `http://postit.wac.under-wolf.eu/notes/${updNote.id}`,
            updNote
        );
        commit('addTask', updNote);
        
    },
    async deleteTask ({ commit }, delTask){
        await axios.put(
            `http://postit.wac.under-wolf.eu/notes/${delTask.id}`,
            delTask
        );
        commit("destroyTask", delTask)
    },
};

const mutations = {
    setAllNotes: (state, allNotes) => (state.notesData = allNotes),
    newNote: (state, newNote) => state.notesData.unshift(newNote),
    removeNote: (state, id) =>
        (state.notesData = state.notesData.filter(note => note._id !== id)),
    addTask: (state, updNote) => {
        if ((typeof(updNote) === 'object') && (updNote !== null)) {
            const index = state.notesData.findIndex(note => note._id === updNote.id);
            state.notesData[index].content = updNote.content;
        } else {
            return false;
        }
    },
    destroyTask: (state, delTask) =>{
        if ((typeof(delTask) === 'object') && (delTask !== null)) {
            const index = state.notesData.findIndex(note => note._id == delTask.id);
            state.notesData[index].content = delTask.content;
        } else {
            return false;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
}
