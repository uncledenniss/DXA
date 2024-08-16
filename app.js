const tracer = require('dd-trace').init();
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello DX Hero Folks this is a Sample React!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
