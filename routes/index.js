var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// 定義フェーズ
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
  name:  String,
  point: Number,
  created :{ type: Date, default: Date.now }
});
mongoose.model('User', UserSchema);

// 使用フェーズ
mongoose.connect('mongodb://testochiba:anndoro1221@ds025752.mlab.com:25752/testochiba');

var User = mongoose.model('User');
var user = new User();
user.name  = 'KrdLab_from_heroku';
user.point = 777;
user.save(function(err) {
  if (err) { console.log(err); }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
