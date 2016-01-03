var express = require('express');
var app = express();
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'about' });
});

router.get('/posts', function(req, res, next) {
  res.render('posts', { title: 'posts' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'test' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'login' });
});

module.exports = router;
