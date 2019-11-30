var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/aaa',function(req,res,next){
  //res.render('aaa');
  var flag=req.body.flag;
  if(flag=='abc'){
    console.log('aaaaaaaaaa');
  }
  else console.log(flag);

  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("runoob");
    dbase.createCollection('site', function (err, re) {
        if (err) throw err;
        console.log("创建集合!");
    });
});
})

router.get('/bbb',function(req,res,next){
  res.render('bbb');
  MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("runoob");
    var myobj = { name: "菜鸟教程", url: "www.runoob" };
    dbo.collection("site").insertOne(myobj, function(err, re) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
});
})





module.exports = router;
