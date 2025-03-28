const fs = require('fs-extra');

//copiar el archivo "mensaje.txt" a "copiar.txt"
fs.copy('C:\Users\scarl\Desktop\Programacion\esVocal.js', 'C:\Users\scarl\Desktop\Programacion\.vscode' )
.then(()=>
console.log('Atchivo copiado correctamente'))
.catch((error)=>
console.log('Error al copiar el archivo: ', error));