
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 3000;
const app = express();

//add gzip compression
app.use(compression());

app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//opens browser
app.listen(port, function(err){

  if(err){

    console.log(err);

  } else{

    open('http://localhost:' + port);
  }

});
