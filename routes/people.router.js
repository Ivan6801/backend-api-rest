const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      name: 'Luis',
      age: 23,
      role: 'Backend Engineer',
    },
    {
      name: 'Paula',
      age: 25,
      role: 'Product Design',
    },
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Luis',
    age: 23,
    role: 'Backend Engineer',
  });
});

module.exports = router;
