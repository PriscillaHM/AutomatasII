const fs = require('fs');
fs.readFile('data.txt','utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    var cadena_slit = data.split('\n');
    for(let i; i<cadena_slit.length;i++){
        
    }
    console.log(cadena_slit);
    console.log(data);
    console.log(cadena);
});
