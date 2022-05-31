class Producto{
    constructor(codigo,nombre,precio,descripcion,cantidad){
        this.codigo = codigo
        this.nombre = nombre
        this.precio = parseInt(precio)
        this.descripcion = descripcion
        this.cantidad = parseInt(cantidad)
    }
    calcularDescuento(descuento){
        return this.precio * cantidad * descuento;
    }
    crearObjetos(){
        const productos = []
        productos.push(new Producto(120,'Papas fritas1   '   ,6700,' con salsa a elección',2))
        productos.push(new Producto(121,'Papas fritas2   '   ,7700,' Con carne de ave',3))
        productos.push(new Producto(122,'Papas fritas3   '   ,8700,' Paras fritas con carne de vacuno',1))
        productos.push(new Producto(123,'Papas fritas4   '   ,9300,' Paras fritas con carne mixto',4))
        productos.push(new Producto(124,'Pizza simple    '   ,7300,' Pizza, queso, salsa de tomate, champiñón',2))
        productos.push(new Producto(125,'sandwich        '   ,1200,' Sandwich, queso, jamon',5))
        productos.push(new Producto(126,'Tostada         '   ,1600,' Tostada con queso, mantequilla y jamon',2))
        productos.push(new Producto(127,'Pollo asado     '   ,6800,' Pollo asado con agregado a elección',2))
        productos.push(new Producto(128,'Costillar       '   ,13600,'Costillar de cerdo al horno',1))
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
            //Solocita la cantidad de producto que desea comprar
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

function main(){
    
    const prod = new Producto();
    const productos = prod.crearObjetos()
    pedidos = realizarPedido(productos)
    alert(calcularTotal(pedidos))
    
}
main()




