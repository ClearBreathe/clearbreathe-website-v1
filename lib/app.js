const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routers = require('./routers');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/api', routers.api);

app.use(require('./error-handlers'));

app.use(express.static(path.join(__dirname, '../client/public')));
app.use('/node_modules', express.static(path.join(__dirname, '../client/node_modules')));

module.exports = app;
