let numeroAdivinado = Math.floor (Math.random() *10) +1
let intento;
let cantidadIntentos= 0;
while (intento !== numeroAdivinado) {
    intento = parseInt(prompt("Adiviná el número del 1 al 10"));
    cantidadIntentos++;
}
alert("Adivinaste y ganaste 1000 dolares! Lo hiciste en " + cantidadIntentos + " intentos.");
