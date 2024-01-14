const router = require('express').Router();
const {getAllTodos,getOneTodo, createTodos, updateTodo, deleteTodo} = require('../controllers/todos.controllers');


router.get('/u',getAllTodos);
router.get('/:id',getOneTodo);
router.post('/addTodo',createTodos);
router.patch('/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

module.exports = router;