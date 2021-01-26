const express = require('express');
const routes = express.Router();

const taskController = require('../controllers/taskController');


routes
    // tasks
    .get('/task',taskController.index)
    .post('/task', taskController.create)
    .put('/task/:id', taskController.update)
    .delete('/task/:id', taskController.delete)

module.exports = routes;