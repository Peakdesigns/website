const express = require('express');

const app = express();
fs = require('fs');

app.get('/', (request, response) => {
    
    fs.readFile('./home.html', 'utf8', (err, html) => {
        if (err ) {
            response.status(500).send('sorry, link is broken :x');
        }

        response.send(html);
    })

});

app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'))
