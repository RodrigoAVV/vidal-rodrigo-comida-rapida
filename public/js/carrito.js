carrito = []

const cartContainer = document.querySelector('#contenedor__sec')

const cargarCarrito = () => {
    cartContainer.innerHTML = ''
    carrito = JSON.parse(localStorage.getItem('carrito'))
    carrito.forEach((carro) =>{
        const contenedor = document.createElement("article")
        contenedor.className = 'contenedor__sec__carrito'
        //blackstick
        contenedor.innerHTML = `
            <img src="../public/img/comidas/${carro.imagen}" alt="${carro.nombre}">
            <p>${carro.descripcion}</p>
            <h5>${carro.precio}</h5>
            <button id="${carro.codigo}" class="btn btn-warning contenedor__sec__carrito__delete" title="Eliminar producto">
                <img src="../public/img/iconos/delete.png" alt="eliminar"/>
            </button>`
        cartContainer.append(contenedor)
    })
   addEventClik()
   mostrarTotal()
   contadorCarrito()
}

const calcularTotal = () => {
    carrito = JSON.parse(localStorage.getItem('carrito'))
    let suma = 0
    carrito.forEach((carro)=>{
        suma += carro.precio
    })
    return suma
}

const mostrarTotal = () => {
    const contenedor = document.createElement("article")
    contenedor.className = 'contenedor__sec__carrito'
    contenedor.innerHTML = `
        <h2>Total</h2>
        <h2>${calcularTotal()}</h2>
        <button title="Eliminar producto">
            Comprar
        </button>`
    cartContainer.append(contenedor)
}

const quitarProducto = (e) => {
    const codigo = e.target.getAttribute('id')
    let indice
    carrito = JSON.parse(localStorage.getItem('carrito'))
    for(let i = 0 ; i < carrito.length ; i++){
        if(carrito[i].codigo == codigo){
            indice = i
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
    totalCarrito.innerText = carrito.length
}
cargarCarrito()

