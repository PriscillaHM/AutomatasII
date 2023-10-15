const fs = require('fs')
const coincidencias = [];
const palabras = [];

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', '\n', '\r']; 
    
    let palabraActual = "";

    for (let i = 0; i < data.length; i++) {
        if (simbolos.includes(data[i])) {
            if (palabraActual.length > 0) {
                palabras.push(palabraActual);
            }
            palabras.push(data[i]);
            palabraActual = ""; 
        } else {
            palabraActual += data[i];
        }
    }
    console.log(palabras);
});

// COINCIDENCIAS
fs.readFile('sqlkeywords.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo de texto:', err);
    return;
  }

  const lineas = data.split('\n'); // Dividir el texto en líneas

  // Iterar sobre las líneas del archivo
  lineas.forEach((linea) => {
    const palabra = linea.trim(); // Eliminar espacios en blanco alrededor de la palabra

    // Verificar si la palabra coincide con alguna en el arreglo
    if (palabras.includes(palabra)) {
      coincidencias.push(palabra);
    }
  });

  if (coincidencias.length > 0) {
    console.log('Palabras coincidentes:');
    coincidencias.forEach(palabra => {
      console.log(palabra);
    });
  } else {
    console.log('No se encontraron palabras coincidentes.');
  }
});