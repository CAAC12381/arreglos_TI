const usedMemory = () => {
    const memory = process.memoryUsage();
    return memory.heapUsed / 1024 / 1024; // Convertir a MB
};

console.log(`Memoria inicial: ${usedMemory().toFixed(2)} MB`);

const booleano = true;
console.log(`Memoria con Boolean: ${usedMemory().toFixed(2)} MB`);

const numero = 42;
console.log(`Memoria con Number: ${usedMemory().toFi
    
    
    xed(2)} MB`);

const bigNumber = BigInt("123456789012345678901234567890");
console.log(`Memoria con BigInt: ${usedMemory().toFixed(2)} MB`);

const texto = "Hola, mundo!";
console.log(`Memoria con String: ${usedMemory().toFixed(2)} MB`);

const simbolo = Symbol("unico");
console.log(`Memoria con Symbol: ${usedMemory().toFixed(2)} MB`);

const nulo = null;
console.log(`Memoria con Null: ${usedMemory().toFixed(2)} MB`);

const indefinido = undefined;
console.log(`Memoria con Undefined: ${usedMemory().toFixed(2)} MB`);

const objeto = { nombre: "Juan", edad: 25, ciudad: "CDMX" };
console.log(`Memoria con Object: ${usedMemory().toFixed(2)} MB`);

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(`Memoria con Array: ${usedMemory().toFixed(2)} MB`);

const funcion = function () { return "Hola"; };
console.log(`Memoria con Function: ${usedMemory().toFixed(2)} MB`);
