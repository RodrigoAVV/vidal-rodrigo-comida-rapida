const total = document.querySelector('#total')
const descuento = document.querySelector('#descuento')
const iva = document.querySelector('#iva')
const total_pagar = document.querySelector('#total_pagar')
const btn_pago = document.querySelector('#btn_pago')
const txtDireccion = document.querySelector('#direccion')
const lblDireccion = document.querySelector('#lblDireccion')
const confirmar = document.querySelector('#success')
const btn_cerrar = document.querySelector('#btn_cerrar')
const btn_limpiar = document.querySelector('#btn_limpiar')
const addEventClikPago = () => {
    btn_pago.addEventListener('click', function(){
        const direccion = txtDireccion.value
        if(direccion == null || direccion.length == 0 || /^\s+$/.test(direccion)){
            lblDireccion.innerHTML='Dirección de envio es necesaria'
            lblDireccion.classList.add('fondo');
        }else{
            lblDireccion.classList.remove('fondo');
            lblDireccion.innerHTML='Dirección de envio:'
            confirmar.innerHTML='Su pedido está confirmado'
            confirmar.classList.add('success')
        }
    })
}

const addEventClikCerrar = () => {
    btn_cerrar.addEventListener('click', function(){
        confirmar.classList.remove('success')
        confirmar.innerHTML=''
        direccion.value=''
    })
}

const addEventClikLimpiar = () => {
    btn_limpiar.addEventListener('click', function(){
        let confirmar
        if(confirm('Está seguro de vaciar su carrito?') == true){
            localStorage.clear()
            cargarCarrito()
            contadorCarrito()
            toastNotificacion()
            mostrarDetalle()
        }
    })
}

const mostrarDetalle = () =>{
    const detalle = sumarTotal(3,5,7,10)
    if(detalle){
        total.value = detalle[0]
        descuento.value = detalle[1]
        iva.value = detalle[0] * 0.19
        total_pagar.value = detalle[0] - detalle[1]
    }
}
mostrarDetalle()
addEventClikPago()
addEventClikCerrar()
addEventClikLimpiar()