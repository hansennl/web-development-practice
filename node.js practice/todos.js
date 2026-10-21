const express = require('express');
const router = express.Router();

// In-memory array to store todo items
let todos = [
  { id: 1, title: 'Learn Node.js', completed: true },
  { id: 2, title: 'Master Express Routing', completed: false }
];

// 1. GET: Read all todos
router.get('/', (req, res) => {
  res.json(todos);
});

// 2. GET: Read a single todo by id
router.get('/:id', (req, res) => {
  const todoId = parseInt(req.params.id);
  const todo = todos.find(t => t.id === todoId);

  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }

  res.json(todo);
});

// 3. POST: Create a new todo
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

// 4. PUT: Update an existing todo
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

// 5. DELETE: Remove a todo
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