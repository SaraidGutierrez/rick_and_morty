// const express = require('express');
// const server = express();
// const PORT = 3001;
// const cors = require('cors');
// const {router} = require('./routes/index');
// const morgan = require('morgan');
// const { sequelize } = require("./DB_connection");

// server.use(morgan('dev'));
// server.use('/rickandmorty', router);

// const corsOptions = {
//   origin: "*",
//   credentials: true, // access-control-allow-credentials: true
//   optionSuccessStatus: 200,
// };

// server.use(cors(corsOptions));
// server.use(express.json());

// sequelize.sync({ force: true }).then(() => {
//   server.listen(PORT, (req, res) => {
//     console.log(`Server on port ${PORT}`);
//   });
// });

// module.exports = server;



const PORT = 3001;
const app = require("./app");
const { conn} = require("./DB_connection");

conn.sync({ force: true }).then(() => {
  app.listen(PORT, (req, res) => {
    console.log(`Server on port ${PORT}`);
  });
});