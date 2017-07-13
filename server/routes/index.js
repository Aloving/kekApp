const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

router.get(['/stat', '/calendar', '/calendar/**'], (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
