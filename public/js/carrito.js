let carrito = []

const cartContainer = document.querySelector('#contenedor__sec')

const cargarCarrito = () => {
    cartContainer.innerHTML = ''
    //Operador lógico OR
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    if(carrito.length > 0){
        carrito.forEach((carro) =>{
            const contenedor = document.createElement("article")
            contenedor.className = 'contenedor__sec__carrito'
            //blackstick
            //Desestructuración
            const { imagen,nombre,descripcion,precio,codigo } = carro
            contenedor.innerHTML = `
                <img src="../public/img/comidas/${imagen}" alt="${nombre}">
                <p>${descripcion}</p>
                <h5>${precio}</h5>
                <button id="${codigo}" class="btn btn-warning contenedor__sec__carrito__delete" title="Eliminar producto">
                    <img src="../public/img/iconos/delete.png" alt="eliminar"/>
                </button>`
            cartContainer.append(contenedor)
        })
       addEventClik()
       mostrarTotal()
       contadorCarrito()
    }else{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__sec__carrito'
        //blackstick
        contenedor.innerHTML = '<h2>No hay productos en el carrito</h2>'
        cartContainer.append(contenedor)
    }
    contadorCarrito()
}
//Spread
const sumarTotal = (...descuentos) => {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    let descuento = 0
    let total = 0
    let montoFinal = 0
    carrito.forEach((carro)=>{
        total += carro.precio
    })
    //Operadores lógicos
    if(total >= 20000 && total <= 35000){
        descuento = total * descuentos[0] / 100
        montoFinal = total - descuento;
    }
    if(total > 35000 && total <= 50000){
        descuento = total * descuentos[1] / 100
        montoFinal = total - descuento;
    }
    if(total > 50000 && total <= 65000){
        descuento = total * descuentos[2] / 100
        montoFinal = total - descuento;
    }
    if(total > 65000){
        descuento = total * descuentos[3] / 100
        montoFinal = total - descuento;
    }
    return [total,descuento,montoFinal]
}

const mostrarTotal = () => {
    items = sumarTotal(3,5,7,10)
    console.log(items)
    const contenedor = document.createElement("article")
    contenedor.className = 'contenedor__sec__carrito'
    //Operadores ternarios.
    contenedor.innerHTML = `
        <h2>Total</h2>
        <h2>${items[0]}</h2>
        <h2>Descuento</h2>
        <h2>${items[0] >= 20000 ? items[1] : 0}</h2>
        <h2>Total a pagar</h2>
        <h2>${items[0] >= 20000 ? items[2] : items[0]}</h2>
        <button title="Eliminar producto"> Comprar </button>`
    cartContainer.append(contenedor)
}

const quitarProducto = (e) => {
    const codigo = e.target.getAttribute('id')
    let indice
    carrito = JSON.parse(localStorage.getItem('carrito'))
    for(let i = 0 ; i < carrito.length ; i++){
        //Operador ternario
        const encontrado = carrito[i].codigo == codigo ? indice = i : console.log('')
        if(encontrado){
            break
        }
    }
    carrito.splice(indice,1)
    localStorage.setItem('carrito', JSON.stringify(carrito))
    cargarCarrito()
    contadorCarrito()
  }
const addEventClik = () => {
    const btnsDelete = document.querySelectorAll('.contenedor__sec__carrito__delete')
    btnsDelete.forEach((btnDelete) => {
        btnDelete.addEventListener('click', quitarProducto)
    })
}
const contadorCarrito = () => {
    const totalCarrito = document.querySelector('#cantidad')
    carrito = JSON.parse(localStorage.getItem('carrito'))
    carrito.length > 0 ? totalCarrito.innerText = carrito.length : totalCarrito.innerText = '0'
    
}
cargarCarrito()

