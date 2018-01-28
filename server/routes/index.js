var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var data = {}; //最后返回的json对象
var sql;//操作数据库的命令

var pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'wwenj1234',
  database: 'my_blog'
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  var sql_id = req.query.sql_id; //1增2删3改
  switch (sql_id) {
    case '1':
      sql = "insert into blog_table values (null,'mysql','mysql的使用','2018/8/15','王老五','mysql最棒')";
      getData(sql);
      break;
    case '2':
      sql = "delete from blog_table where id=26";
      getData(sql);
      break;
    case '3':
      sql = "delete from blog_table where id=27";
      getData(sql);
      break;
    default:
      sql = "SELECT * FROM blog_table";
      getData(sql);

  }

  
  function getData(sql) {
    console.log(sql)
    //按前端返回参数进行增删改查
    pool.query(sql, function (err, results, fields) {
      if (err) throw err;
      //增删改查之后查询，并把查询的最终数据返回前端
      pool.query("SELECT * FROM blog_table", function (err, results, fields) {
        if (err) throw err;
        data.result = results
        //返回前端数据
        res.statusCode = 200;
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Content-Type', 'application/json');
        res.json(data);
      });
    });
  }
  console.log('listion:http://127.0.0.1:3001/');
});

module.exports = router;