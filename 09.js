const app = new Vue({
    el: '#app',
    data: {
        titulo: 'BARRA DE PROGRESO',
        contador: 0
    },
    // Agregar propiedades computadas
    computed: {
        color: function(){
            return {
                'bg-success': this.contador<=25,
                'bg-info':  this.contador>25 && this.contador<=50,
                'bg-warning':  this.contador>50 && this.contador<=75,
                'bg-danger': this.contador>75
            };
        }
    }
})
