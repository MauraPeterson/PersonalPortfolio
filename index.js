const express = require('express');
const { readFile, readFileSync } = require('fs');

var http = require('http');
const path = require('path');
const app = express();

app.get('/', (request, response) => {
  app.use(express.static(path.join(__dirname, 'public')));
  readFile('./index.html', 'utf8', (err, html) => {
    
    if(err) {
      response.status(500).send('sorry, out of order')
      console.log(err);
    }
    
    response.send(html);
  })
});

app.get('/personal-portfolio', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/personal-portfolio', 'personal-portfolio.html'));
  app.use(express.static(path.join(__dirname, '/public/personal-portfolio')));
});

app.get('/movie-land', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/movie-land/build', 'index.html'));
  app.use(express.static(path.join(__dirname, 'public/movie-land/build')));
});

app.get('/cherry-rush', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/cherry-rush', 'cherryRush.html'));
  app.use(express.static(path.join(__dirname, '/public/cherry-rush')));
});


app.listen(process.env.PORT || 3000, () => console.log(`Listening on port 3000`))
