const  { Client }  = require('pg')

const databaseConfig = new Client({
    host: 'localhost',
    user: 'postgres',
    database: 'mfahrianda_backend_2',
    port: 5432,
    password: '09april2002'
})

module.exports = databaseConfig