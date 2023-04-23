const express = require('express')

//iniciando uma const e atribuindo o express a ela
const app = express()

//porta manual do serve
const port = 8015

//Chamando a conexão do banco de dados
const db = require('./models/db')

//Chamando o models de cadastro.
const User = require('./models/User')

//Aqui preparamos o projeto pra receber valores em formato JSON.
app.use(express.json())

//Porta principal
app.get('/', async (req, res) => {
    res.send('Bem vindo')
    res.status()
})

//Porta de cadastros
app.post('/cadastrar', async (req, res) => {
    
    //console.log(req.body)

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usúario cadastrado com sucesso!"
        });
    }).catch(() =>{
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usúario não cadastrado com sucesso!"
        });
    });

    //res.send('Pagina cadastrar')
})

app.listen(port, ()=>{
    console.log(`Servidor iniciado: http://localhost:${port} `)
})