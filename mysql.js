var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'admin123',
    database:'test1'
});

connection.connect();


var sql = 'SELECT * FROM websites';
var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var addSqlParams = ['菜鸟工具','https://c.runoob.com','2345','CN']

connection.query(addSql,addSqlParams,function (error,result) {
    if(error) throw error
    console.log(result)
})

connection.query(sql,function (error,results) {
    if(error) throw error
    console.log('---------------------------------------------SELECT--------------------------------------------')
    console.log(results);
    console.log('----------------------------------------------------------------------------------------------')
})


