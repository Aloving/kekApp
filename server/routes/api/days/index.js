const express = require('express');
const router = express.Router();

let ObjectID = require('mongodb').ObjectID;
const mongoose = require(`${__base}/libs/mongoose`);
const moment = require(`${__base}/libs/moment`);
const task = require('./task');
const indexPage = require('./indexPage');
const calendar = require('./calendar');
const byId = require('./byId');
const statistics = require('./statistics');

router.get('/index', indexPage);
router.get('/calendar', calendar);
router.get('/byid/:id', byId);
router.get('/statistics', statistics)

router.use('/task', task);

module.exports = router;