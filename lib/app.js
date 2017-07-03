const path = require('path');

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const routers = require('./routers');
const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));

app.use(middlewares['res.error']);

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

app.use('/api', routers.api);

app.use(express.static(path.join(__dirname, '../client/public')));

module.exports = app;
