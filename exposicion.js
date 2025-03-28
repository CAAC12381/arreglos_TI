// Manejo de asicronia

//Callbacks funciones de retrollamada

const fs = require('fs');  // importa el modulo fs
fs.readFile('archivo.txt', 'utf8', (err, data) =>  {  // lee el archivo
    if (err){ // manejar errores 
        console.error('Error al leer el archivo:', err);
        return;
    }
    console.log('Contenido del archivo:', data)
});

//Promesas

const fsPromises = require('fs').promises //importar el modulo
fsPromises.readFile('archivo.txt', 'utf8') // lee el archivo 
.then(data => {  // se ejecuta si la promesa es resuelta
    console.log('Contenido del archivo:', data) 
})
.catch(err => {  // se ejecuta si la promesa es rechazada 
console.error('Error al leer el archivo:', err)
})
const fs = require('fs')
const fsPromises = fs.promises
async function leerArchivo(){
    try{
        const data = await fsPromises.readFile('archivo.txt', 'utf8')
    } catch (err){
        console.error('Error al leer el archivo:', err)
    }
}
leerArchivo()

// uso con async/await
const fs = require('fs')
const fsPromises = fs.promises
async function leerArchivo(){
    try{
        const data = await fsPromises.readFile('archivo.txt', 'utf8')
    } catch (err){
        console.error('Error al leer el archivo:', err)
    }
}
leerArchivo()

// operaciones asicronas 
 const fsPromises = require('fs').promises

 async function manipularArchivo(){
    try{
        //Leer archivo
        const data = await fsPromises.readFile('archivo.txt', 'utf8')
        console.log('Archivo leido:', data)

        // Escribir en el archivo
        await fsPromises.writeFile('archivo.txt', 'Nuevo contenido')
        console.log('Archivo actualizado')

        //Renombrar el archivo
        await fsPromises.rename('archivo.txt', 'nuevoArchivo.txt')
    }catch (err){
        console.error('Error:', err)
    }
 }

 manipularArchivo()
