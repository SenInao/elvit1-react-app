require('dotenv').config({ path: './w3s-dynamic-storage/.env' })
const path = require('path');
const express = require('express');
const WS = require("./ws-1")

const ws = new WS()

const clientApp = express();
clientApp.use(express.static('dist'));
clientApp.use(express.json());

clientApp.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

if (process.env.NODE_ENV !== 'development') {
  clientApp.listen(8000, () => console.log('client listening on port 8000'));
}
