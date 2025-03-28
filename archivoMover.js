const fs = require('fs-extra');

//mover el archivo "copiar.txt" a la carpeta "backup"
fs.move('C:\Users\scarl\Desktop\Programacion\esVocal.js', 'backup/C:\Users\scarl\Desktop\Programacion\.vscode')
.then(()=>
console.log('Archivo movido correctamente'))
.catch((error)=>
console.log('Error al mover el arcivo: ', error))