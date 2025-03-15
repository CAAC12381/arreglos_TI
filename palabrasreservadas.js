//  Ejemplo de Palabras Reservadas en JavaScript

// Palabra reservada 'if' usada en una estructura de control
let edad = 18;

function usuarioContra(usuario, contraseña){
    //-lenght -> caracteres de   cadena
    //if else vaidacion 

    return usuarioContra(usuario, contraseña)
}

usuarioContra('', '')
if (edad.lenght >=
 18) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

// Palabra reservada 'function' usada para definir una función
function saludo() {
    console.log("Hola, bienvenido!");
}


saludo();  // Llamada a la función

// Intentar usar una palabra reservada como identificador (esto da error)
// let function = "Esto es un error"; //  'function' es una palabra reservada

// También puedes usar 'return' dentro de funciones
function calcularSuma(a, b) {
    return a + b;  // Palabra reservada 'return' para devolver un valor
}

console.log("Suma:", calcularSuma(5, 7));
