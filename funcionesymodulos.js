// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Menú de opciones
console.log("=== Conversor de Temperaturas ===");
console.log("1. Celsius a Fahrenheit");
console.log("2. Fahrenheit a Celsius");

// Usar argumentos de la línea de comandos en lugar de prompt-sync
const args = process.argv.slice(2); // Obtener los argumentos pasados al ejecutar el programa
const opcion = args[0]; // Primer argumento (elección de conversión)
const valor = parseFloat(args[1]); // Segundo argumento (temperatura a convertir)

if (opcion === "1") {
    let resultado = celsiusAFahrenheit(valor);
    console.log(`Resultado: ${valor}°C = ${resultado.toFixed(2)}°F`);
} else if (opcion === "2") {
    let resultado = fahrenheitACelsius(valor);
    console.log(`Resultado: ${valor}°F = ${resultado.toFixed(2)}°C`);
} else {
    console.log("Opción no válida. Usa:");
    console.log("node conversor.js 1 <temperatura> → Para convertir de Celsius a Fahrenheit");
    console.log("node conversor.js 2 <temperatura> → Para convertir de Fahrenheit a Celsius");
}
