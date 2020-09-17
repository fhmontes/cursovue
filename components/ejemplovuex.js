// Crear componente padre
Vue.component('padre', {
    template: 
    `<div style="padding: 5px; background: red">
        <h2>numero {{ $store.state.numero }}</h2>
        <hijo></hijo>
    </div>`
})

// Crear componente hijo
Vue.component('hijo', {
    template: 
    `<div style="padding: 5px; background: blue">
        <h3>numero {{ $store.state.numero }}</h3>
    </div>`
})