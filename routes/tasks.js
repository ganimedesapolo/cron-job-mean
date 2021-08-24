const express = require('express');
const router = express.Router();
const {getTasks,addTasks,deleteTasks} = require('../controllers/tasks')


router
   .route('/')
   .get(getTasks)
   .post(addTasks);


   router
   .route('/:id')
   .delete(deleteTasks);

module.exports = router;