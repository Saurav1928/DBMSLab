const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',//use your sql password
  database: 'dbmsassignment'// use correct db name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);

//   Perform a SELECT query
//students->table name
  connection.query('SELECT * FROM students', (queryErr, results, fields) => {
    if (queryErr) {
      console.error('Error executing the query: ' + queryErr);
      return;
    }

    // Process the query results
    console.log('Query results:');
    console.log(results);

    // Close the connection when done
    connection.end((endErr) => {
      if (endErr) {
        console.error('Error closing MySQL connection: ' + endErr);
        return;
      }
      console.log('Connection closed.');
    });
  });
});



/*
node --v
npm i mysql2
npm i express
node filename (ex. node connect for connect.js)
*/
