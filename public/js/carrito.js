let carrito = []

const cartContainer = document.querySelector('#contenedor__sec')

const cargarCarrito = () => {
    cartContainer.innerHTML = ''
    //Operador lógico OR
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    if(carrito.length > 0){
        mostrarTotal()
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
    if(carrito){
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
}

const mostrarTotal = () => {
    items = sumarTotal(3,5,7,10)
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
        `
    cartContainer.append(contenedor)
   
}

const quitarProducto = (e) => {
    const codigo = e.target.getAttribute('id')
    let indice
    carrito = JSON.parse(localStorage.getItem('carrito'))
    if(carrito){
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
        toastNotificacion()
        mostrarDetalle()
    }
}

const toastNotificacion = () => {
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        destination: "#",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #F90606, #F08D8D)",
        },
        onClick: function(){
        } // Callback after click
      }).showToast();
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
    if(carrito){
        carrito.length > 0 ? totalCarrito.innerText = carrito.length : totalCarrito.innerText = '0'
    }else{
        totalCarrito.innerHTML = '0'
    }
}

cargarCarrito()

