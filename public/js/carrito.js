carrito = []


const cargarCarrito = () => {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    carrito.forEach((carro)=>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__sec__carrito'
        //blackstick
        contenedor.innerHTML = `<img src="../public/img/comidas/${carro.imagen}" alt="${carro.nombre}">
                                <p>${carro.descripcion}</p>
                                <h5>${carro.precio}</h5>
                                <button id="${carro.codigo}" class="contenedor__sec__carrito__delete" title="Eliminar producto">
                                    <img src="../public/img/iconos/delete.png" alt="eliminar"/>
                                </button>`
        const cards = document.getElementById('contenedor__sec')
        cards.append(contenedor)
    })
    const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__sec__carrito'
        contenedor.innerHTML = `<h2>Total</h2>
                                <h2>26562</h2>
                                <button title="Eliminar producto">
                                   Comprar
                                </button>
                                `
                                
    const cards = document.getElementById('contenedor__sec')
    cards.append(contenedor)
}

cargarCarrito()

 