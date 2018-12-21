'use strict';

const express = require('express');
const path = require('path');
const errorhandler = require('errorhandler');
const enrouten = require('express-enrouten');

const port = process.env.PORT || 3000; 

var app = express();

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorhandler());
}

app.use(express.static(path.join(__dirname, 'material-ui/build')));


app.use(enrouten({ directory: 'routes' }));


app.listen(port, () => console.log(`App listening on port ${port}!`));
