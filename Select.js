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

	/* Insert Information Here. */

		//SQL statement
	var sql = "SELECT * FROM PhoneDirectory";

		//SQL Statement Execution
	con.query(sql,function(err,result){
		if (err) throw err;
		console.log(result);
	});
});


/* 
* After This, In Terminal Type :
* node Select.js
*/