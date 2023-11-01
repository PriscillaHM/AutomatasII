const fs = require('fs')
const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', "", '', '\n', '\r', "'", '"']; 
const palabras = [];
let palabraActual = "";

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) console.log(err);

    for (let i = 0; i < data.length; i++) {
        if (simbolos.includes(data[i])) {
            if (palabraActual.length > 0) {
                palabras.push(palabraActual);
                palabraActual = ""; 
            } else {
                palabras.push(data[i]);
            }
        } else {
            palabraActual += data[i];
        }
    }
});
// COINCIDENCIAS
fs.readFile('sqlkeywords.txt', 'utf-8', (err, data) => {
  console.log(palabras);
  if (err) {
      console.log(err);
  }
  const keywords = data.split('\n');
  for (let i = 0; i < palabras.length; i++) {
      for (let j = 0; j < keywords.length; j++) {
          let [id,  , valor] = keywords[j].split(' ');
          if (palabras[i] == valor) {
              console.log(id);
          }
      }   
  }
});