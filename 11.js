const app = new Vue({
    el: '#app',
    data: {
        titulo: 'LISTADO DE PRODUCTOS',
        productos: [
            { nombre: 'Harina', cantidad: 20},
            { nombre: 'Fideo', cantidad: 35},
            { nombre: 'Arroz', cantidad: 40},
            { nombre: 'Azucar', cantidad: 25},
        ],
        nombreProducto: '',
        total: 0
    },
    methods: {
        adicionarProducto: function(){
            this.productos.push({
                nombre: this.nombreProducto,
                cantidad: 0
            });
            this.nombreProducto = '';
        }
    },
    computed: {
        sumaCantidad: function(){
            this.total = 0;
            for(prod of this.productos){
                this.total += prod.cantidad;
            }
            return this.total;
        }
    }
})