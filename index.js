const express = require('express');
const { readFile, readFileSync } = require('fs');

const path = require('path');
const app = express();


app.get('/', (request, response) => {
  readFile('./index.html', 'utf8', (err, html) => {
    
    if(err) {
      response.status(500).send('sorry, out of order')
      console.log(err);
    }
    
    response.send(html);
  })
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port 80`))