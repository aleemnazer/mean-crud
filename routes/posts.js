var express = require('express');
var router = express.Router();

var product_controller = require('../controllers/post.controller.js')

/* GET users listing. */
router.get('/', product_controller.index);
module.exports = router;
