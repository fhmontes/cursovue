// Crear componente saludar
Vue.component('mensaje', {
    props: ['nombre', 'apellido'],
    template: '<h2>Buenas noches {{ nombre}} {{ apellido }}</h2>'
})

// Instanciar objeto de vue
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'COMPONENTES ARRAYS DE OBJETOS',
        personas: [
            { nombre: 'Ana', apellido: 'Gomez'},
            { nombre: 'Maria', apellido: 'Lopez'},
            { nombre: 'Sandra', apellido: 'Flores'}
        ]
    }
})
