const express = require('express');
const server = express();

server.use(express.json());

server.listen(3000);

server.get('/', (req, res) => {
    return res.send({firts: 'Olá, mundo'})
})

server.get('/query-params', (req, res) => {
    const {name, age} = req.query;

    return res.json({ result: `Nome: ${name} e Idade: ${30}`})
})

