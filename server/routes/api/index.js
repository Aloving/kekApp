const express = require('express');

const router = express.Router();

const days = require('./days');
const marks = require('./marks');

router.use('/days', days);
router.use('/marks', marks);

module.exports = router;
