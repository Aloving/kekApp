const express = require('express');
const router = express.Router();
const MarksData = require(`${__base}/models/Mark`).Mark;

const getmarks = require('./getmarks');
const addmark = require('./addmark');

router.get('/getmarks', getmarks);
router.post('/addmark', addmark);

module.exports = router;