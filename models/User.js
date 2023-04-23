const Sequelize = require('sequelize')
//Importamos o sequelize.

const db = require('./db')
//Importamos a conexão do nosso banco de dados.

//Aqui estamos usando uma ferramenta do sequelize para alimentar tabela..
//"users" -> significa o nome da tabela que vai ser alimentada.
const User = db.define('users', {
    //Cada objeto aqui "id: name: email:" -> Significa uma coluna do banco de dados.
    id: {
        type: Sequelize.INTEGER,    //Tipo de dado (numero, string, ...)
        autoIncrement: true,        //auto incrementador do id, caso ja exista o id:1 ele irá criar o id:2 em sequencia, assim por diante... 
                                    //!Não é nessesario colocar no cadastro o id!
        allowNull: false,           //Significa que não pode ser nulo.
        primaryKey: true            //Key prymaria do banco de dados
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },

})

//Função que faz a seguinte coisa -> Caso não exista a tabela ela deve ser criada.
User.sync()

//Essa função verifica se existe uma alteração na tabela e atualiza ela. 
//User.sync({alter: true})

module.exports = User;