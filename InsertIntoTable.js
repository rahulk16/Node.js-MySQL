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
	var sql = "INSERT INTO PhoneDirectory (name,Mnum) VALUES ?";

		//Values to insert
	var values = [
		["Rahul Kumar","9876543210"],
		["Kaustubh Pandey","7896541230"],
		["Prashant Mahanta","8521236547"]
	];

		//SQL Statement Execution
	con.query(sql,[values],function(err,result){
		if (err) throw err;
		console.log("No. of Values Inserted : ",result.affectedRows);
	});
});


/* 
* After This, In Terminal Type :
* node InsertInto.js
*/