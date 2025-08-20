let saldo = 10000;
let opcion = parseInt(prompt("Ingresa una opción:\n1 - Consultar saldo\n2 - Retirar\n3 - Depositar\n4 - Salir"));

while (opcion !== 4) {
    let importe;

    if (opcion === 1) {
        alert("Tu saldo es de $" + saldo);

    } else if (opcion === 2) {
        importe = parseInt(prompt("¿Cuánto querés retirar?"));

        if (importe > saldo) {
            alert("No disponés de fondos suficientes");
        } else {
            saldo = saldo - importe;
            alert("Retiraste $" + importe + ". Nuevo saldo: $" + saldo);
        }

    } else if (opcion === 3) {
        importe = parseInt(prompt("¿Cuánto querés depositar?"));
        saldo = saldo + importe;
        alert("Depositaste $" + importe + ". Nuevo saldo: $" + saldo);

    } else {
        alert("Por favor, ingresá una opción válida");
    }
    opcion = parseInt(prompt("Ingresa una opción:\n1 - Consultar saldo\n2 - Retirar\n3 - Depositar\n4 - Salir"));
}