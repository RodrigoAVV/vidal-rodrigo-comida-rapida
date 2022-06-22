class Producto{
    constructor(codigo,nombre,descripcion,precio,imagen){
        this.codigo=codigo
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
        this.imagen=imagen
    }
    crearProductos(){
        const productos = []
        productos.push(new Producto(120,'Papas surtido','Papas fritas con carne de pollo y salsa a elección',6800,'papas-surtido.jpg'))
        productos.push(new Producto(121,'Papas, pollo y asado','Papas fritas con pollo asado',7900,'papas-pollo-asado.jpg'))
        productos.push(new Producto(122,'Papas con cebolla','Papas fritas con cebolla frita',4600,'papas-cebolla.jpg'))
        productos.push(new Producto(123,'Papas con crema','Papas fritas con crema',3800,'papas-crema.jpg'))
        productos.push(new Producto(124,'Papas fritas con tocino','Papas fritas con tocino y mostaza',3900,'papas-tocino.png'))
        productos.push(new Producto(125,'Completo italiano','Completo tomate, palta y mayo',1600,'completo-italiano.png'))
        productos.push(new Producto(126,'Hamburguesa de pollo','Hamburguesa pollo, tomate y cebolla',3200,'hamburguesa-pollo.jpg'))
        productos.push(new Producto(127,'Nuggets de pollo','Nuggets de pollo mas salsa a elección',3800,'nuggets-pollo.jpg'))
        productos.push(new Producto(128,'Pizza casera','Pizza con queso, aceituna, tomate y albahaca',5600,'pizza-casera.jpg'))
        productos.push(new Producto(129,'Sándwich campestre','Sándwich queso, cebolla, tomate y mayo',5800,'sándwich-campestre.jpg'))
        productos.push(new Producto(130,'Sándwich de pollo','Sándwich de pollo, palta, tomate y salsa ',6300,'sándwich-pollo.jpg'))
        productos.push(new Producto(131,'Sándwich simple','Sándwich queso y jamón ',2000,'sándwich-simple.jpg'))
        return productos
    }
}
const producto = new Producto()
const productos = producto.crearProductos()

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
    productos.forEach((producto)=>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__section__article'
        //blackstick
        //Desestructuración
        const { imagen,nombre,precio,codigo } = producto
        contenedor.innerHTML = `<img src="public/img/comidas/${producto.imagen}" alt="${nombre}">
                                <p>${nombre}</p>
                                <h5>${precio}</h5>
                                <button id="${codigo}" class="btn btn-info contenedor__section__article__add">Agregar al carrito</button>`
        const cards = document.getElementById('contenedor__section')
        cards.append(contenedor)
    })
    addEventClik()
   
}

const sumarTotal = () => {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    let total = 0
    carrito.forEach((carro)=>{
        total += carro.precio
    })
    total >= 20000 ? toastNotificacion('Ya tiene descuento','#0341B5','#B1DAF5') : ''
}


if (localStorage.getItem('carrito')) {
    contadorCarrito()
}
cargarProductos()

