// railway

import mysql from 'mysql2';

export const db = mysql.createConnection({
    username: 'root',
    password: 'YFiwYnqdahY7VkfkAp9R',
    database: 'railway',
    host: 'containers-us-west-92.railway.app',
    port: '7793',
    dialect: 'mysql',
})

// import mysql from 'mysql2';

// export const db = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "password123",
//     database: "plataformaeadlocal"
// })