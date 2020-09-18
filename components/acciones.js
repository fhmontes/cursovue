Vue.component('padre', {
    template: 
    `<div>
        <button @click="obtenerUsuarios">Obtener Usuarios</button>
        <ul>
            <li v-for="usr of usuarios">{{ usr.id }} - {{ usr.name }}</li>
        </ul>
    </div>`,
    computed: {
        ...Vuex.mapState(['usuarios'])
    },
    methods: {
        ...Vuex.mapActions(['obtenerUsuarios'])
    }
})