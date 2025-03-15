console.log(" Conversiones de Datos en JavaScript\n");

//  Convertir a Número
console.log(" A Número:");
console.log(Number("123")); // 123
console.log(parseFloat("123.45")); // 123.45
console.log(parseInt("123.99")); // 123
console.log(Number(true), Number(false)); // 1, 0
console.log(Number("Hola")); // NaN
console.log("\n");

//  Convertir a String
console.log("A String:");
console.log(String(456)); // "456"
console.log(String(true)); // "true"
console.log("\n");

//  Convertir a Boolean
console.log(" A Boolean:");
console.log(Boolean(1), Boolean(0)); // true, false
console.log(Boolean("Hola"), Boolean("")); // true, false
console.log("\n");

//  Convertir a JSON y de JSON a Objeto
console.log("JSON:");
let obj = { nombre: "Ana", edad: 22 };
let json = JSON.stringify(obj);
console.log(json); // {"nombre":"Ana","edad":22}
console.log(JSON.parse(json)); // { nombre: 'Ana', edad: 22 }
