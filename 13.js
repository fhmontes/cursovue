// Crear componente saludar
Vue.component('mensaje', {
    props: ['nombre', 'apellido'],
    template: '<h2>Buenas noches {{ nombre}} {{ apellido }}</h2>'
})

// Instanciar objeto de vue
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'PASANDO DATOS A UN COMPONENTE'
    }
})
