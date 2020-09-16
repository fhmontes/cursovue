const app = new Vue({
    el: '#app',
    data: {
        titulo: 'LISTA DE PERSONAS',
        personas: [
            { id: 1, nombre:'Mateo', edad: 25 },
            { id: 2, nombre:'Marcos', edad: 12 },
            { id: 3, nombre:'Lucas', edad: 59 },
            { id: 4, nombre:'Juan', edad: 37 }
        ]
    }
})