var express = require('express');
var router = express.Router();

var post_controller = require('../controllers/post.controller.js')

router.route('/')
  .get(post_controller.index)
  .post(post_controller.create);
router.route('/:id')
  .get(post_controller.show)
  .put(post_controller.update)
  .delete(post_controller.delete);

module.exports = router;
