import express from 'express';

import conexao from '../infra/conexao.js';

const app = express();

app.use(express.json());


const buscarSelecao = (id) => {
    return selecoes.filter(selecao => selecao.id == id);
}

const BuscarIndexSelecao = (id) => {
    return selecoes.findIndex(selecao => selecao.id == id);
}

app.get('/selecoes', (req, res) => {
    // res.status(200).send(selecoes);
    const sql = 'SELECT * FROM selecoes';
    conexao.query(sql, (err, result) => {
        if (err) {
            res.status(404).json({error: 'erro ao buscar seleções'});
        }
        res.status(200).json(result);
    })
})

app.get('/selecoes/:id', (req, res) => {
    // res.json(buscarSelecao(req.params.id));
    const id = req.params.id;
    const sql = 'SELECT * FROM selecoes WHERE id = ?';
    conexao.query(sql, id, (err, result) => {
        const linha = result[0];
        if (err) {
            res.status(404).json({error: 'erro ao buscar seleções'});
        }
        res.status(200).json(linha);
    })
})

app.post('/selecoes', (req, res) => {
    // selecoes.push(req.body);
    // res.status(201).send("seleção criada com sucesso");
    const selecao = req.body;
    const sql = 'INSERT INTO selecoes SET ?';
    conexao.query(sql, selecao, (err, result) => {
        if (err) {
            res.status(400).json({error: 'erro ao buscar seleções'});
        }
        res.status(201).json(result);
    })

})

app.delete('/selecoes/:id', (req, res) => {
    // const index = BuscarIndexSelecao(req.params.id);
    // selecoes.splice(index, 1);
    // res.status(200).send(`seleção com id:${req.params.id} deletada com sucesso`);
    const id = req.params.id;
    const sql = 'DELETE FROM selecoes WHERE id = ?';
    conexao.query(sql, id, (err, result) => {
        if (err) {
            res.status(404).json({error: 'erro ao buscar seleções'});
        }
        res.status(200).json(result);
    })
})

app.put('/selecoes/:id', (req, res) => {
    // const index = BuscarIndexSelecao(req.params.id);
    // selecoes[index].nome = req.body.nome;
    // selecoes[index].grupo = req.body.grupo;
    // res.json(selecoes);
    const id = req.params.id;
    const selecao = req.body;
    const sql = 'UPDATE selecoes SET ? WHERE id = ?';
    conexao.query(sql, [selecao, id], (err, result) => {
        if (err) {
            res.status(400).json({error: 'erro ao buscar seleções'});
        }
        res.status(200).json(result);
    })
})

export default app