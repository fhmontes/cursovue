// Instanciar objeto de vuex
// Vuex nos ayuda a declarar variables globales
const store = new Vuex.Store({
    state: {
        numero: 10
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
