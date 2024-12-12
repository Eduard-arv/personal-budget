const montoInput = document.getElementById("monto")

const form = document.getElementById("transactionForm")

// const montoValue = montoInput.value

function obtenerMonto(monto){
    // Me indique si hay error si el monto es valido o no
    // El monto no puede ser texto
    // El monto no puede ser negativo
    // Alerta que me muestre el monto que tengo
    if (isNaN(monto) || monto<=0){
        alert("Este no es un número válido")
    }
    alert("El monto ingresado el válido")
    return alert(monto)
}

form.addEventListener("submit", (e)=> {
    e.preventDefault()

    const montoValue = montoInput.value
    
    obtenerMonto(montoValue)
    const para = document.createElement("p");
para.innerText = "This is a paragraph.";
})

