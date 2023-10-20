const fs = require('fs')
const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', "", '', '\n', '\r']; 
const palabras = [];
let palabraActual = "";

fs.readFile('sql.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  for (let i = 0; i < data.length - 1; i++) {
      if (simbolos.includes(data[i])) {
          if (palabraActual.length > 0) {
              if ( data[i] == "." && data[i + 1].match(/[a-zA-Z]/) ) {
                  palabraActual += data[i];
              } else {
                  palabras.push(palabraActual);
              }
              palabras.push(data[i]);
              palabraActual = ""; 
          } else {
              palabras.push(data[i]);
          }
      } else {
          palabraActual += data[i];
      }
  }
    //console.log(palabras);
});

// COINCIDENCIAS
fs.readFile('sqlkeywords.txt', 'utf-8', (err, data) => {
  /* console.log(palabras); */
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