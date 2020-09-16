const app = new Vue({
    el: '#app',
    // Propiedades
    data: {
        mensaje: 'Hola Mundo'
    },
    // Metodos
    methods: { },
    // Propiedades calculadas/computadas
    computed: { 
        invertido(){
            // Obtener la cadena en un array
            let mensajeArray = this.mensaje.split('');
            // Invertir el array
            let arrayInvertido = mensajeArray.reverse();
            // Convertir array en cadena
            let mensajeInvertido = arrayInvertido.join('');
            // Retornar cadena invertida
            return mensajeInvertido;
        }
    }
})
