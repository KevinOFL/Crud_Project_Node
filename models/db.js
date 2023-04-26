const Sequelize = require('sequelize')

//Aqui fazemos a conexão com nosso banco de dados (no meu caso local)
//Segue a linha de como criar a conexão com sequelize -> "banco de dados" - "user" - "senha do bd" {"host" - "qual tipo de bd"}
const sequelize = new Sequelize("dbserve","root", "!=Tree8987", {
    host: "localhost",
    dialect: "mysql"
} ) 

//Usamos a função authenticate para verificar se a conexão foi bem sucedida, retornando TRUE acessando o THEN.
//Se não for bem sucedida irá acessar o catch.
sequelize.authenticate()
.then(function () {
    console.log(`Conexão com o banco de dados realizada com sucesso!`)
}).catch(function (){
    console.log(`Erro: conexão com o banco de dados não foi efetivada com sucesso!`)
})

/*
        Devemos somente utilizar essa função de then e catch de erros dessa forma somente enquanto estiver em desenvolvimento,
        depois dessa fase devemos remover ou atualizar por questões de segurança.
 */

//Exportamos nossa conexão.
module.exports = sequelize