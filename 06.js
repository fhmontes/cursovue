const app = new Vue({
    el: '#app',
    // Declarar atributos
    data: {
        titulo: 'METODOS Y EVENTO CLICK',
        nombre: '',
        mensaje: ''
    },
    // Declarar funciones o metodos
    methods: {
        saludar: function() {
            this.mensaje = 'Buenas noches ' + this.nombre;
        }
    }
})