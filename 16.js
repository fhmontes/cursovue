// Instanciar objeto de vuex
// Vuex nos ayuda a declarar variables globales
const store = new Vuex.Store({
    state: {
        numero: 10
    },
    // Mutaciones: Metodos que interactuan con los estados
    mutations: {
        subir: function() {
            this.state.numero++;
        },
        bajar: function() {
            this.state.numero--;
        },
        incrementar: function(state, valorIncremento) {
            state.numero += valorIncremento;
        }

    }
})

// Instanciar objeto de vue
const app = new Vue({
    el: '#app',
    store: store,
    data: {
        titulo: 'EJEMPLO CON VUEX'
    }
})
