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
    crearObjetos(){
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
        return productos
    }
}
const calcularTotal = (pedidos) => {
    let sumaPrecios = 0
    pedidos.forEach((pedido)=>{
        sumaPrecios += pedido.precio * pedido.cantidad
    })
    //Dependiendo del monto final, se realiza un descuento predeterminado
    let totalPagar = 0
    if(sumaPrecios < 20000){
        totalPagar = sumaPrecios - sumaPrecios * 0.03
    }else if(sumaPrecios >= 20000 && sumaPrecios < 35000){
        totalPagar = sumaPrecios - sumaPrecios * 0.07
    }else if(sumaPrecios >= 35000 && sumaPrecios < 45000){
        totalPagar = sumaPrecios - sumaPrecios * 0.11
    }else if(sumaPrecios >= 45000){
        totalPagar = sumaPrecios - sumaPrecios * 0.15
    }
    return totalPagar
}
function realizarPedido(productos){
    let codigo = 0
    let cantidad = 0
    let pedidos = []
        console.log('CODIGO        ' + 'NOMBRE    ' + '                     PRECIO' + '                    DESCRIPCION')
    productos.forEach((producto)=>{
        console.log(producto.codigo + "           " + producto.nombre + "               " + producto.precio + "                     " + producto.descripcion)
    })
    do{    
        codigo = prompt('Ingrese código de producto que desea comprar\nPara salir ingrese 0')
        //Valida que código de producto exista 
        if(codigo >= 120 && codigo <= 128){
            //Busca un producto con el código ingresado
            const resultado = productos.find(producto => producto.codigo == codigo)
            //Solicita la cantidad de producto que desea comprar
            cantidad = prompt('Ingrese cantidad de producto')
            //Verifica que cantidad de producto sea mayor que cero
            if(cantidad > 0){
                //Cambia la cantidad, por el momento no valida si excede la cantidad
                resultado.cantidad = cantidad
                //Guarda el producto en un nuevo arreglo
                pedidos.push(resultado)
            }else{
                alert('Cantidad debe ser mayor que cero')
            }
        }
    }while(codigo!=0)
    return pedidos
}
function cargarProductos(productos){
    
    productos.forEach((producto)=>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__section__article'
        contenedor.id = producto.codigo
        contenedor.innerHTML = `<img src="public/img/comidas/${producto.imagen}" alt="${producto.nombre}">
                                <p>${producto.nombre}</p>
                                <h5>${producto.precio}</h5>
                                <button>Agregar al carrito</button>`
        const cards = document.getElementById('contenedor__section')
        cards.append(contenedor)
        
    })
      
    

}
function main(){
    
    const prod = new Producto();
    const productos = prod.crearObjetos()
    //pedidos = realizarPedido(productos)
    //alert(calcularTotal(pedidos))
    cargarProductos(productos)
    
}
main()




