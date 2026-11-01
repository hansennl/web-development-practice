const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Arkin', role: 'ICT Programmer' },
      { id: 2, name: 'Hansen', role: 'Fullstack Developer' }
    ]
  });
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ 
    success: true,
    user: { id: userId, name: `User Profile #${userId}` } 
  });
});

module.exports = router;