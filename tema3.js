let arreglo =[1,2,3,4,5]
console.log(arreglo[0])
arreglo[0]=2

let array = [1,2,3]
array.push(4)
console.lo(array)

let array2 = [1,2,3];
array.pop()
console.log(array)

let miArreglo = ["perro","gato","pajaro","vaca","elefante"];
miArreglo.unshift("cuyo")
console.log(miArreglo)

const cities =["Marid","Valencia","Mexico"];
const first = cities.shift();
console.log(cities)
console.log(first)

let arreglo =["ardilla","pato","pez"];
console.log = (arreglo.includes("ardilla"))
console.log = (arreglo.includes("persona"))

let miArreglo1 = ["caballo","vaca","burro"]
console.log =(miArreglo1.indexOf("caballo"))
console.log =(miArreglo1.indexOf("vaca"))


let miArreglo2 = ["caballo","vaca","burro"]
for (let i = 0; i < miArreglo2; i++){
    console.log(miArreglo2)
}


let palabras = ["Theboss","hola","hamburguesa","Haitiano","globo"];
let masde5letras = palabras.filter((x)=>x.length > 5);
console.log(masde5letras);


let number = [1,4,9,16];
let raiz = number.map ((num)=> math.sqrt(num));
console.log (raiz);


let inicioen = 1;
let operation = raiz.reduce((acumulada, acumulado)=>acumulada * acumulado,inicioen,);
console.log(operacion);


let numP = [6,7,8,9,10]
let Positivos = numP.every(num => num > 0);
console.log(Positivos)


let numN = [1,-2,3,4,5]
let Negativos = numN.some(num => num < 0)
console.log(Negativos)


let name = ["Ale","Fanny","Migue","Citlalli"];
nombres.sort();
console.log(nombres)


let numeros =[1,2,3,4,5];
numeros.reverse();
console.log(numeros);


let arreglo1 = [1,2,3];
let arreglo2 = [4,5,6];
let combinado =arreglo1.concat(arreglo2);
console.log(combinado);


let nombresSalon = ["Alex","Cris"]
nombresSalon [o] = "Danna"
// .metodo()

function nombreEQUIS (num){
    if (num < 0 ){
        console.log("True")
    }
}