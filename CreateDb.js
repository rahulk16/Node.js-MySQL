var mysql = require('mysql');

var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password : ""
});

con.connect(function(err){
	if (err) throw err;
	console.log("Connected.");

 /* Create Your Database named<mydb> */
 	con.query("CREATE DATABASE mydb", function(err,result){
 		if (err) throw err;
 		console.log("DATABASE Created!");
 	});


});


/* 
* After This, In Terminal Type :
* node CreateDb.js
*/