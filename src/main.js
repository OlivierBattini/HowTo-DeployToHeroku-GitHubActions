const express = require('express');

const PORT = 8080;

const server = express();
server
    .all('/', (request, response) => {
        response.send('<h1>Hello, world!</h1>');
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));