const express = require('express');

const router = express.Router();
const DaysData = require(`${__base}/models/Day`).Day;
const updateRoute = require('./update');
const deleteRoute = require('./delete');
const addRoute = require('./add');

router.put('/update/:id', updateRoute);
router.delete('/delete/:id', deleteRoute);
router.post('/add', addRoute);

module.exports = router;
