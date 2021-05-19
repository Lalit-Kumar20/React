var express = require('express');
var ctr = require('./test.controller');
var router = express.Router();
router.get('/',ctr.test)
module.exports = router;
