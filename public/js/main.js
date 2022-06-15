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

carrito = []

const addEventClik = () => {
    const botonesCompra = document.querySelectorAll('.contenedor__section__article__add')
    botonesCompra.forEach((btnCompra) => {
        btnCompra.addEventListener('click', agregarProducto)
    })
}

const contadorCarrito = () => {
    const totalCarrito = document.getElementById('cantidad')
    carrito = JSON.parse(localStorage.getItem('carrito'))
    totalCarrito.innerText = carrito.length
}

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('id')
    const producto = productos.find((producto) => producto.codigo ==  productoElegido)
    carrito.push(producto)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    contadorCarrito()
}

const cargarProductos = () => {
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
    addEventClik()
}

if (localStorage.getItem('carrito')) {
    contadorCarrito()
}
cargarProductos()

 