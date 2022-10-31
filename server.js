//configuração do servidor
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//renderização front-end
app.use(express.json())
app.set('view engine', 'ejs')
app.set('view engine', 'html')

//exportar os dados de conexão do servidor
module.exports = {app,port}