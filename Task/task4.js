const express = require('express');
const app = express();
const port = 3000;

function task4(){
  app.get('/', (req, res) => {
    res.send('Hello World');
  });

  app.get('/about', (req, res) => {
    res.send('About Us');
  });

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
}

module.exports = task4;