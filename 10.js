// Instanciar objeto de vue
const app = new Vue({
    // Indicar elemento html gestionado por vue
    el: '#app',
    // Variables/Atributos a relacionarse con el DOM
    data: {
        titulo: 'Ciclo de Vida de Vue'
    },
    // Metodos
    methods:{
        destruir: function() {
            // Destruir la instancia
            this.$destroy();
        }
     },
    // Propiedades computadas
    computed:{ },
    // Metodos del ciclo de vida
    beforeCreate() {
        // 1) Se ejecuta al instanciar (app)
        console.log('beforeCreate...');
    },
    created() {
        // 2) Al crear metodos, observadores, evento.
        console.log('created...');
    },
    beforeMount() {
        // 3) Antes de insertar informacion en el DOM
        console.log('beforeMount...');
    },
    mounted(){
        // 4) Al insertar informacion en el DOM
        console.log('mounted...');
    },
    beforeUpdate(){
        // 5) Al detectar algun cambio
        console.log('beforeUpdate...');
    },
    updated(){
        // 6) Al realizar el cambio
        console.log('update...');
    },
    beforeDestroy(){
        // 7) Antes de destruir la instancia
        console.log('beforeDestroy...');
    },
    destroyed(){
        // 8) Al destruir la instancia
        console.log('destroyed...');
    }
})
