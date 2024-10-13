import express from 'express';

const app = express();

//mock

const selecoes = [
    {
        id: 1,
        nome: 'Brasil',
        grupo: 'G'
    },
    {
        id: 2,
        nome: 'Suiça',
        grupo: 'G'
    },
    {
        id: 3,
        nome: 'Servia',
        grupo: 'G'
    },
    {
        id: 4,
        nome: 'Camaroes',
        grupo: 'G'
    }
]

app.get('/', (req, res) => {
    res.send('Curso de API REST com NodeJS');
})

app.get('/selecoes', (req, res) => {
    res.status(200).send(selecoes);
})

export default app