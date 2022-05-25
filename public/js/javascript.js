const sumaTotal = () => {
    let cantidad = 0
    let suma = 0
    let precio = 0
    cantidad = parseInt(prompt("Ingrese cantidad de productos "))
    if(cantidad > 0){
        //Variable i no aumenta a menos que ingrese un valor mayor que cero
        for(let i = 1 ; i <= cantidad ;){
            precio = parseInt(prompt("Ingrese precio de producto " + i))
            if(precio > 0){
                suma += precio
                i++
            }else{
                alert('El valor ingresado no es válido')
            }
        }
    }else{
        alert('Cantidad inválida')
    }
    return suma
}
const calcularTotal = (suma) => {
    //Dependiendo del monto final, se realiza un descuento predeterminado
    let totalPagar = 0
    if(suma < 20000){
        totalPagar = suma - suma * 0.03
    }else if(suma >= 20000 && suma < 35000){
        totalPagar = suma - suma * 0.07
    }else if(suma >= 35000 && suma < 45000){
        totalPagar = suma - suma * 0.11
    }else if(suma >= 45000){
        totalPagar = suma - suma * 0.15
    }
    return totalPagar
}

//Funcion que agrupa y llama las funciones creadas anteriormente
function main(){
    const suma = sumaTotal()
    if(suma > 0){
        const total = calcularTotal(suma)
        alert('El precio total de su pedido es ' + total)
    }else{
        alert('Monto inválido')
    }
    
}
//LLamdado final
main()
