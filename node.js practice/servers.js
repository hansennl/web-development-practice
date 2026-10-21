const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the CRUD API server!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});