const fs = require('fs');

fs.readFile('sql.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    
    const tokens = data
        .split(/(,|'|\(|\)|;|:|_|\s+|\.)/)
        .filter((token) => token && !token.match(/^\s+$/));
    
    console.log(tokens);
});
