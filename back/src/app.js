//const express = require('express');
//const app = express();
// routes and middleware here

// const server = require('./server.js')

// const { sequelize } = require('./DB_connection')
// const { saveApiData } = require('./controllers/saveApiData')


// sequelize.sync({force: true}).then(()=>{
//         saveApiData();
//         server.listen(3001, ()=>{
//         console.log('Server on port 3001');
//     })
    
    
// })
// module.exports = server;

const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes/index");

// Configuración con problema de CORS
// const corsOptions = {
//   origin: "*",
//   credentials: true, // access-control-allow-credentials: true
//   optionSuccessStatus: 200,
// };

app.use(cors()); 
app.use(express.json());
app.use("/", router);

module.exports = app;