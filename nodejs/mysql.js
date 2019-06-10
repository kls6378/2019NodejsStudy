var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'NodejsStudy'
});

connection.connect();

connection.query('SELECT * FROM topic',function(error,result,fields){
    if(error){
        console.log(error);
    }
    console.log(result);
});

connection.end();