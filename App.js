//Funciones Operar Matematicas

/*function suma(a, b){
  let suma = (a+b)
  return suma;
}*/
function suma (a, b){
  return a + b
}

function resta(a, b){
  return a + b
}

function divicion(a, b){
  let resultado = a / b
  if(resultado == 0){
    console.log("no es divisible")
  }else{
    return resultado;
  }
}

function multiplicación(a, b){
  return a * b
}

//Funcion de Calculadora Principal
function mostrarResultado(operacion, a, b){
  let resultado;
  switch(operacion){
    case "suma": 
      resultado = suma(a, b)
    break
    case "resta":
      resultado = multiplicación(a, b)
      break
    default:
    resultado = "Operacion No Valida"
  }

  console.log("El resultado de" + operacion + "entre" + a + "y" + b + "es" + resultado )
}

//Ejemplo de Uso
let numeroA = 20
let numeroB = 40

mostrarResultado("suma", numeroA, numeroB )


/*console.log("hola")

//Variables Javascript 
//let cadena = "string"
const edad = 30
let numero = 4
let double = 5.55
let cadena = "cadena"
let arreglo = ["item 1", "item 2"]
//let boleano = isTrue

// Estructuras de Control if Switch 

if(cadena = "cadena"){
  console.log("es una cadena")
}else{
  console.log("no es una cadena")
}

let dia = 3;
switch (dia) {
  case 1:
    console.log("Lunes")
    break;
  case 2:
    console.log("Martes")
  case  3:
    console.log("miercoles")
  default:
    break;
} 

//Bucles for while 

for (let i = 0; i < 5; i++){
  console.log(i)
}

let i = 0;
while(i < 5){
  console.log(i);
  i ++
}

//Funciones
function functionExample(mensaje){
  return "Hola" + mensaje
}

function calcularSuma(a, b){
  suma = (a + b)
  return suma
}

//Arreglo 
let frutas = ["Manzana", "Pera", "Durazno"]
console.log(futras[2])
*/