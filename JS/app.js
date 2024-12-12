const montoInput = document.getElementById("monto")
const transacList = document.getElementById("lista-transaccion")
const form = document.getElementById("transactionForm")
// Los arreglos (guardar informacion)
const transacciones = []
function obtenerMonto(monto) {
    // Me indique si hay error si el monto es valido o no
    // El monto no puede ser texto
    // El monto no puede ser negativo
    // Alerta que me muestre el monto que tengo
    if (isNaN(monto) || monto <= 0) {
        alert("Este no es un número válido")
    }
    alert("El monto ingresado el válido")
    return alert(monto)
}
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const montoValue = montoInput.value
    transacciones.push(montoValue)
    console.log(transacciones)
    // Renderiza un array
    transacList.innerHTML = "";
    transacciones.forEach(elem => {
        const listItem = document.createElement("div")
        listItem.innerHTML = `
        <div>
            <span class="card-1">La transaccion es ${elem} </span>
        </div>
            `;
        transacList.appendChild(listItem)
    })
})


