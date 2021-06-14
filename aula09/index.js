const express = require("express")


const app = express();

app.get('/', (req, res) => {


    res.send('Voce está na home')
}
)

app.get('/cumprimentar/:nome', (req, res) => {

    const nome = req.params.nome
    res.send('Olá' + ' ' + nome)
}
)

app.get('/calcular/:number1/:number2', (req, res) => {
    const number1 = parseInt(req.params.number1)
    const number2 = parseInt(req.params.number2)
    const soma = number1 + number2
    if(number2){
        res.send(`${soma}`)
    } else {
        res.send(`${number1}`)
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando: http://localhost:3000")
})





