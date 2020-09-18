// Crear componente padre
Vue.component('padre', {
    template: 
    `<div style="padding: 5px; background: red">
        <h2>numero: {{ $store.state.numero }}</h2>
        <h2>numero con propiedad computada: {{ numero }}</h2>
        <hijo></hijo>
    </div>`,
    // Simplificando la invocacion a state
    computed: {
        /*
        numero: function(){
            return store.state.numero;
        }
        */
       // Obtener estado del store mediante mapState
       ...Vuex.mapState(['numero'])
    }
})

// Crear componente hijo
Vue.component('hijo', {
    template: 
    `<div style="padding: 5px; background: blue">
        <button @click="$store.commit('bajar')">-</button>
        <button @click="$store.commit('subir')">+</button>
        <br/>
        <button @click="bajar">- con mapMutation</button>
        <button @click="subir">+ con mapMutation</button>
        <br/>
        <button @click="incrementar(2)">Incremento</button>
        <h3>numero {{ $store.state.numero }}</h3>
    </div>`,
    methods: {
        ...Vuex.mapMutations(['bajar', 'subir', 'incrementar'])
    }
})