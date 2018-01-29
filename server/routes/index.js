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
  var sql_id = req.query.sql_id; //接受1增2删3改
  var id=req.query.id;//接受删除/更改id
  var add_con=req.query.add_con;
  console.log(add_con)
  // update my_student set name='wang1' where gender='男';
  switch (sql_id) {
    case '1':
      sql = `insert into blog_table values (null,'${add_con[1]}','${add_con[2]}','${add_con[3]}','${add_con[4]}','${add_con[5]}')`;
      getData(sql);
      break;
    case '2':
      sql = `delete from blog_table where id=${id}`;
      getData(sql);
      break;
    case '3':
      sql = `update blog_table set title='${add_con[1]}',small_title='${add_con[2]}',timer='${add_con[3]}',zuozhe='${add_con[4]}',concent='${add_con[5]}' where id=${id}`;
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