/*
    El usuario ingresa su año de nacimiento. La máquina calcula
    y muestra su edad aproximada.
*/

const EDAD_LEGAL = 18
let anioDeNacimiento
let edad

// Entrada
anioDeNacimiento = parseInt(prompt("¿En qué año naciste?"));

// anioDeNacimiento = parseInt(anioDeNacimiento)

// Proceso
edad = 2023 - anioDeNacimiento

// Salida
console.log("Tu edad es de " + edad + " ó " + (edad-1) + " años");


// Informar si puede o no pasar al casino

if (edad >= EDAD_LEGAL) {
    console.log("Pasa")
} else {
    console.log("NO Pasa")
}

let res = "Algo por defecto";
if (seCumpleALgo) {
    res = "Lo nuevo"
}
console.log(res)

let num = parseInt(prompt("Poné un número entero"))

if (num > 0) {
    console.log("Positivo")
} else {
    if (num < 0) {
        console.log("Negativo")
    } else {
        console.log("Neutro")
    }
}

if (num > 0) {
    console.log("Positivo")
} else if (num < 0) {
    console.log("Negativo")
} else {
    console.log("Neutro")
}

switch (numeroMarcadoEnTelefono) {
    case 1:
        // Ventas
        break;
    case 2:
        // RRHH
        break;
    default:
        // ERROR
        break;
}