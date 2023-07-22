// src/config/config.js

const config = {
  // username: process.env.MYSQL_USER,
  // password: process.env.MYSQL_PASSWORD,
  username: 'root',
  password: 'YFiwYnqdahY7VkfkAp9R',
  database: 'railway',
  host: 'containers-us-west-92.railway.app',
  port: '7793',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};

// const config = {
//   username: 'root',
//   password: 'password123',
//   database: 'plataformaeadlocal',
//   host: '127.0.0.1',
//   dialect: 'mysql',
// };

// module.exports = {
//   development: config,
//   test: config,
//   production: config,
// };