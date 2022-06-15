
let carrito=[]

const btnCarro = document.querySelector('.contenedor__header__items')

//Función que es ejecutada al producirse el evento click
const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('id')
    const producto = productos.find((producto) => producto.codigo ==  productoElegido)
    //Guardo productos en carrito
    carrito.push(producto)
    const cantidad = document.getElementById('cantidad')

    localStorage.setItem('carro', JSON.stringify(carrito))

    carrito = JSON.parse(localStorage.getItem('carro'))
    cantidad.innerText = carrito.length

}

const cargarProductos = () => {
    //Array de productos son cargados en una card
    productos.forEach((producto)=>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__section__article'
        //blackstick
        contenedor.innerHTML = `<img src="public/img/comidas/${producto.imagen}" alt="${producto.nombre}">
                                <p>${producto.nombre}</p>
                                <h5>${producto.precio}</h5>
                                <button id="${producto.codigo}" class="btn btn-info contenedor__section__article__add">Agregar al carrito</button>`
        const cards = document.getElementById('contenedor__section')
        cards.append(contenedor)
    })
    //Se obtienen todos los botones, se les agrega un evento y la funcion que será ejecutada
    const botonesCompra = document.querySelectorAll('.contenedor__section__article__add')
    botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener('click', agregarProducto)
    })
    const cantidad = document.getElementById('cantidad')
    carrito = JSON.parse(localStorage.getItem('carro'))
    cantidad.innerText = carrito.length
}

cargarProductos()
const main = () => {

}