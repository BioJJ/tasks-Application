const express = require('express');
const routes = express.Router();

const taskController = require('../controllers/taskController');


routes
    // tasks
    .get('/tasks',taskController.index)
    .post('/tasks', taskController.create)
    .put('/tasks/:id', taskController.update)
    .delete('/tasks/:id', taskController.delete)

module.exports = routes;