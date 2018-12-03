var express = require('express');
var router = express.Router();

var post_controller = require('../controllers/post.controller.js')

/* GET users listing. */
router.get('/', post_controller.index);
router.post('/', post_controller.create);
router.get('/:id', post_controller.show);
router.put('/:id', post_controller.update);
router.delete('/:id', post_controller.delete);
module.exports = router;
