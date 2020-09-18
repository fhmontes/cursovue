// Instanciar objeto vuex
const store = new Vuex.Store({
    // Atributos del store
    state:{
        usuarios: []
    },
    // Metodos del store
    mutations:{
        // Crear metodo que carge de datos el array usuarios
        llenarUsuarios: function(state, listaUsuarios){
            state.usuarios = listaUsuarios;
        }
    },
    // Acciones: Permite invocar a un API
    actions:{
        obtenerUsuarios: async function({commit}){
            const data = await fetch('https://jsonplaceholder.typicode.com/users'); 
            const usuarios = await data.json();
            commit('llenarUsuarios', usuarios)
        }
    }
})

// Instanciar objeto de vue
const app = new Vue({
    el: '#app',
    store,
    data: {
        titulo: 'ACCIONES CON VUEX'
    }
})
