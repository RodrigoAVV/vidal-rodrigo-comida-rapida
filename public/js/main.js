class Producto{
    constructor(codigo,nombre,descripcion,precio,cantidad,imagen){
        this.codigo=codigo
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
        this.cantidad=cantidad
        this.imagen=imagen
    }
    calcularDescuento(descuento){
        return this.precio * cantidad * descuento;
    }
}

let carrito=[]
const productos = []
productos.push(new Producto(120,'Papas surtido','Papas fritas con carne de pollo y salsa a elección',6800,2,'papas-surtido.jpg'))
productos.push(new Producto(121,'Papas, pollo y asado','Papas fritas con pollo asado',7900,2,'papas-pollo-asado.jpg'))
productos.push(new Producto(122,'Papas con cebolla','Papas fritas con cebolla frita',4600,3,'papas-cebolla.jpg'))
productos.push(new Producto(123,'Papas con crema','Papas fritas con crema',3800,3,'papas-crema.jpg'))
productos.push(new Producto(124,'Papas fritas con tocino','Papas fritas con tocino y mostaza',3900,5,'papas-tocino.png'))
productos.push(new Producto(125,'Completo italiano','Completo tomate, palta y mayo',1600,10,'completo-italiano.png'))
productos.push(new Producto(126,'Hamburguesa de pollo','Hamburguesa pollo, tomate y cebolla',3200,10,'hamburguesa-pollo.jpg'))
productos.push(new Producto(127,'Nuggets de pollo','Nuggets de pollo mas salsa a elección',3800,7,'nuggets-pollo.jpg'))
productos.push(new Producto(128,'Pizza casera','Pizza con queso, aceituna, tomate y albahaca',5600,6,'pizza-casera.jpg'))
productos.push(new Producto(129,'Sándwich campestre','Sándwich queso, cebolla, tomate y mayo',5800,6,'sándwich-campestre.jpg'))
productos.push(new Producto(130,'Sándwich de pollo','Sándwich de pollo, palta, tomate y salsa ',6300,6,'sándwich-pollo.jpg'))
productos.push(new Producto(131,'Sándwich simple','Sándwich queso y jamón ',2000,6,'sándwich-simple.jpg'))

const agregarProducto = (e) => {
    const productoElegido = e.target.getAttribute('id')
    const producto = productos.find((producto) => producto.codigo ==  productoElegido)
    carrito.push(producto)
    const cantidad = document.getElementById('cantidad')
    console.log(carrito)
    cantidad.innerText = carrito.length
}
function cargarProductos(){
    productos.forEach((producto)=>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__section__article'
        contenedor.innerHTML = `<img src="public/img/comidas/${producto.imagen}" alt="${producto.nombre}">
                                <p>${producto.nombre}</p>
                                <h5>${producto.precio}</h5>
                                <button id="${producto.codigo}" class="btn btn-info contenedor__section__article__add">Agregar al carrito</button>`
        const cards = document.getElementById('contenedor__section')
        cards.append(contenedor)
        
    })
    const botonesCompra = document.querySelectorAll('.contenedor__section__article__add')
    botonesCompra.forEach((botonCompra) => {
        botonCompra.addEventListener('click', agregarProducto)
    })
}
cargarProductos()
