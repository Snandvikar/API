const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Shweta@2003',
    database: 'userdb'
})



module.exports=mysqlPool