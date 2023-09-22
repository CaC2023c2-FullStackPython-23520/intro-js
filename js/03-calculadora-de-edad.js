/*
    El usuario ingresa su año de nacimiento. La máquina calcula
    y muestra su edad aproximada.
*/

let anioDeNacimiento
let edad

// Entrada
anioDeNacimiento = parseInt(prompt("¿En qué año naciste?"));

// anioDeNacimiento = parseInt(anioDeNacimiento)

// Proceso
edad = 2023 - anioDeNacimiento

// Salida
console.log("Tu edad es de " + edad + " ó " + (edad-1) + " años");

// ENTRADA --> PROCESO --> SALIDA