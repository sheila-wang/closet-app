var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(request, response, next) {
  // response.render('index', { title: 'Express' });
  response.send('hello world');
});

module.exports = router;
