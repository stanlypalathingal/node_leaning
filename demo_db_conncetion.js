var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/pharmaceutical";
console.log("Connecting to database");

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.log("Error in connecting to database");
    throw err;
  };

  console.log("Connected to database");

  if (err) throw err;
  console.log("Database created!");

  // Access the database
  var db = client.db("mydb");

  // Close the connection
  client.close();
});
