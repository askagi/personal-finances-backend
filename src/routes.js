const express = require('express');
const { getFinances } = require('./controllers/finances');

const routes = express();
routes.use(express.json());

routes.get('/pfinances', getFinances);

module.exports = routes;