// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Obtener argumentos de la terminal
const args = process.argv.slice(2);
const opcion = args[0]; // "1" o "2"
const valor = parseFloat(args[1]); // Número de temperatura

if (opcion === "1") {
    let resultado = celsiusAFahrenheit(valor);
    console.log(`Resultado: ${valor}°C = ${resultado.toFixed(2)}°F`);
} else if (opcion === "2") {
    let resultado = fahrenheitACelsius(valor);
    console.log(`Resultado: ${valor}°F = ${resultado.toFixed(2)}°C`);
} else {
    console.log("Opción no válida. Usa:");
    console.log("node conversor.js 1 <temperatura> → Celsius a Fahrenheit");
    console.log("node conversor.js 2 <temperatura> → Fahrenheit a Celsius");
}
