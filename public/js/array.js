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
        productos.push(new Producto(120,'Papas fritas',6700,'Paras fritas con salsa a elección',2))
        productos.push(new Producto(121,'Papas fritas',7700,'Con carne de ave',3))
        productos.push(new Producto(122,'Papas fritas',8700,'Paras fritas con carne de vacuno',1))
        productos.push(new Producto(123,'Papas fritas',9300,'Paras fritas con carne mixto',4))
        productos.push(new Producto(124,'Pizza simple',7300,'Pizza, queso, salsa de tomate, champiñón',2))
        productos.push(new Producto(125,'sandwich',1200,' Sandwich, queso, jamon',5))
        productos.push(new Producto(126,'Tostada',1600,'Tostada con queso, mantequilla y jamon',2))
        productos.push(new Producto(127,'Pollo asado',6800,'Pollo asado con agregado a elección',2))
        productos.push(new Producto(128,'Costillar',13600,'Costillar de cerdo al horno',1))
        return productos
    }
}
const calcularTotal = (productos) => {
    let sumaPrecios = 0
    productos.forEach((producto)=>{
        sumaPrecios += producto.precio * producto.cantidad
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
function main(){
    const prod = new Producto();
    const productos = prod.crearObjetos()
    alert('El total a pagar es ' + calcularTotal(productos))
}
main()




