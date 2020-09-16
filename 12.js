// Definir un componente
Vue.component('boton-contador', {
    // Contenido html del componente
    template:'<button @click="contador++">Me ha pulsado {{ contador }} veces</button>',
    // Propiedades/data del componente
    data: function() {
        return {
            contador: 0
        }
    }
})

// Instancia de vue
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'COMPONENTES VUE'
    }
})
