var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : "",
	database : "mydb"
});

con.connect(function(err){
	if(err) throw err;
	console.log("Connected.");

	/* Create Table Here */
	var sql = "CREATE TABLE PhoneDirectory(name VARCHAR(200),Mnum VARCHAR(10))";
	con.query(sql,function(err,result){
		if(err) throw err;
		console.log("Table Created.");
	});
});


/* 
* After This, In Terminal Type :
* node CreateTable.js
*/