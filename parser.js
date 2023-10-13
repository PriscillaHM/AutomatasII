const fs = require('fs')

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    const simbolos = ['.', ',', '-', ' ', ';', '*', '(', ')', ':', '\n', '\r']; 
    const palabras = [];
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