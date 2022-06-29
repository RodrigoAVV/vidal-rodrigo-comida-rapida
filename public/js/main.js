class Producto{
    constructor(codigo,nombre,descripcion,precio,imagen){
        this.codigo=codigo
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
        this.imagen=imagen
    }
}
const producto = []

let carrito = []


const addEventClik = () => {
    const botonesCompra = document.querySelectorAll('.contenedor__section__article__add')
    botonesCompra.forEach((btnCompra) => {
        btnCompra.addEventListener('click', agregarProducto)
    })
}

const contadorCarrito = () => {
    const totalCarrito = document.querySelector('#cantidad')
    carrito = JSON.parse(localStorage.getItem('carrito'))
    totalCarrito.innerText = carrito.length
}

const toastNotificacion = (text,color1,color2) => {
    Toastify({
        text: text,
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right," + color1 + "," + color2 +")",
        },
        onClick: function(){} // Callback after click
      }).showToast();
}

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('id')
    const producto = productos.find((producto) => producto.codigo ==  productoElegido)
    carrito.push(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    contadorCarrito()
    toastNotificacion('Producto agregado','#00b09b','#96c93d')
    sumarTotal()
}

const cargarProductos = () => {
    fetch('./public/js/datos.json')
        .then( (res) => res.json())
        .then( (data) => {
            console.log(data)
        })
    
    
    
    /*
    productos.forEach((producto)=>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__section__article'
        //blackstick
        //Desestructuración
        const { imagen,nombre,precio,codigo } = producto
        contenedor.innerHTML = `<img src="public/img/comidas/${imagen}" alt="${nombre}">
                                <p>${nombre}</p>
                                <h5>${precio}</h5>
                                <button id="${codigo}" class="btn btn-info contenedor__section__article__add">Agregar al carrito</button>`
        const cards = document.getElementById('contenedor__section')
        cards.append(contenedor)
    })
    addEventClik()
   */
}

const sumarTotal = () => {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    let total = 0
    carrito.forEach((carro)=>{
        total += carro.precio
    })
    total >= 20000 ? toastNotificacion('Ya tiene descuento','#0341B5','#B1DAF5') : ''
}

let searchProductos = []
const searchContainer = document.querySelector('#contenedor__section__search')

const cargarProductosSearch = (searchProductos) => {
    searchContainer.innerHTML = ''
    
    searchProductos.forEach((producto)=>{
        const txtSearch = document.createElement("div")
        txtSearch.className = 'contenedor__section__search'
        //blackstick
        txtSearch.innerHTML = ''
        txtSearch.innerHTML = `<img src="public/img/comidas/${producto.imagen}" alt="${producto.nombre}">
                                <p>${producto.nombre}</p>
                                <h5>${producto.precio}</h5>
                                <button id="${producto.codigo}" class="btn btn-info contenedor__section__article__add">Agregar al carrito</button>`
        searchContainer.append(txtSearch)
    })
    addEventClik()
}

const buscarProducto = () => {
    const btnSearch = document.querySelector('#contenedor__header__btn')
    const txtSearch = document.querySelector('#contenedor__header__search')
    btnSearch.addEventListener('click', function(){
        searchProductos = []
        const nombre = txtSearch.value
        if(nombre.length > 0){
            productos.forEach((producto)=>{
                if(producto.nombre.includes(nombre)){
                    searchProductos.push(producto)
                }
            })
            addEventClik()
            cargarProductosSearch(searchProductos)
        }
    })
}

if (localStorage.getItem('carrito')) {
    contadorCarrito()
}
cargarProductos()
//buscarProducto()

