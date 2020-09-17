// Crear componente padre
Vue.component('padre', {
    template: 
    `<div style="padding: 5px; background: yellow;">
        <h2>Componente Padre: {{ numeroPadre }}</h2>
        <button @click="numeroPadre++">+</button>
        {{ nombrePadre }}
        <hijo :numero="numeroPadre"
              @nombreHijo="nombrePadre = $event"></hijo>
    </div>`,
    data: function() {
        return {
            numeroPadre: 7,
            nombrePadre: ''
        }
    }
})

// Crear componente hijo
Vue.component('hijo', {
    props: ['numero'],
    template: 
    `<div style="padding: 5px; background: green;">
        <h3>Componente Hijo: {{ numero }}</h3>
        <h4>{{ nombre }}</h4>
    </div>`,
    data: function() {
        return {
            nombre: 'Juan'
        }
    },
    // Cuando de carge el DOM enviar data al contenedor padre
    mounted(){
        this.$emit('nombreHijo', this.nombre);
    }
})