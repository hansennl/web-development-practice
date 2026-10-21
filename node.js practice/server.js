const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} request to: ${req.url}`);
  next();
});

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.json({ status: 'API is running successfully!' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found / 404 Error' });
});

app.listen(PORT, () => {
  console.log(`Server is active at http://localhost:${PORT}`);
});