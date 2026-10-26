const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, title: 'Learn Node.js', completed: true },
  { id: 2, title: 'Master Express Routing', completed: false }
];

router.get('/', (req, res, next) => {
  try {
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', (req, res, next) => {
  try {
    const todoId = parseInt(req.params.id);
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(todo);
  } catch (err) {
    next(err);
  }
});

router.post('/', (req, res, next) => {
  try {
    const { title, completed } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({ error: 'title is required' });
    }

    if (title.length > 100) {
      return res.status(400).json({ error: 'title must be under 100 characters' });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
      return res.status(400).json({ error: 'completed must be a boolean' });
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: completed !== undefined ? completed : false
    };

    todos.push(newTodo);
    res.status(201).json({ message: 'Todo created successfully', todo: newTodo });
  } catch (err) {
    next(err);
  }
});

router.put('/:id', (req, res, next) => {
  try {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
      if (typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'title must be a non-empty string' });
      }
      if (title.length > 100) {
        return res.status(400).json({ error: 'title must be under 100 characters' });
      }
      todos[todoIndex].title = title.trim();
    }

    if (completed !== undefined) {
      if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'completed must be a boolean' });
      }
      todos[todoIndex].completed = completed;
    }

    res.json({ message: 'Todo updated successfully', todo: todos[todoIndex] });
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', (req, res, next) => {
  try {
    const todoId = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (todoIndex === -1) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    const deletedTodo = todos.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted successfully', deleted: deletedTodo[0] });
  } catch (err) {
    next(err);
  }
});

module.exports = router;