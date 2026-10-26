const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.get('/', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});