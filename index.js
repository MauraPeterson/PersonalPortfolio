const express = require('express');
const { readFile, readFileSync } = require('fs');

var http = require('http');
var https = require('https');
var privateKey = readFileSync('cert/key.pem', 'utf8');
var certificate = readFileSync('cert/cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

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

app.get('/movie-land', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/movie-land/build', 'index.html'));
  app.use(express.static(path.join(__dirname, 'public/movie-land/build')));
});

app.get('/cherry-rush', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/cherry-rush', 'cherryRush.html'));
  app.use(express.static(path.join(__dirname, '/public/cherry-rush')));
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port 3000`))
