import axios from "axios"

const categories = {
    namespaced: true,
    state: {
        categories: []
    },
    mutations: {
        SET_CATEGORIES(state, data) {
            state.categories = data; 
        }
    },
    actions: {
        loadCategories({commit}){
            axios  
                .get('http://localhost:3000/categories')
                .then(res => { commit('SET_CATEGORIES', res.data) })
                .catch(err => console.log(err))
        },
    }
}

export default categories