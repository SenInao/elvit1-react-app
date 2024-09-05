const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./w3s-dynamic-storage/database.db');
console.log("db connected")