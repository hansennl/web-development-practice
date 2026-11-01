const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, title: 'Learn Node.js', completed: true },
  { id: 2, title: 'Master Express Routing', completed: false }
];

router.get('/', (req, res) => {
  res.json(todos);
});

router.get('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(t => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
});

router.post('/', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTodo = {
    id: Date.now(),
    title: title,
    completed: false
  };

  todos.push(newTodo);
  res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
});

router.put('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const { title, completed } = req.body;
  if (title !== undefined) todos[todoIndex].title = title;
  if (completed !== undefined) todos[todoIndex].completed = completed;

  res.json({ message: 'Todo updated successfully', todo: todos[todoIndex] });
});

router.delete('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todoIndex = todos.findIndex(t => t.id === todoId);

  if (todoIndex === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  const deletedTodo = todos.splice(todoIndex, 1);
  res.json({ message: 'Todo deleted successfully', deleted: deletedTodo[0] });
});

module.exports = router;