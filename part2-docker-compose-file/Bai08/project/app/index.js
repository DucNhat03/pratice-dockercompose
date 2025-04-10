const mysql = require('mysql');
const express = require('express');
const app = express();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL database!');
});

app.get('/', (req, res) => {
  res.send('Node.js connected to MySQL!');
});

app.listen(3000, () => {
  console.log('🚀 Server running on port 3000');
});
