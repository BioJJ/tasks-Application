require("dotenv-flow").config();
  
const express = require('express');
const cors = require('cors');
const app = express();

const index = require('./routes/index');
const tasksRoute = require('./routes/taks.routes');



// ==> APP USE:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());


// ==> Rotas da API:
app.use(index);
app.use('/api/', tasksRoute);


// notFound
app.use((req, res, next) => {
    const error = new Error('Route Not found')
    error.status = 404
    next(error)
})

// catch all
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({ error: error.message})
})

module.exports = app;