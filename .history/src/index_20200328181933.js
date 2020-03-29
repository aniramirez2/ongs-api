const express = require('express');
const routes = require('./routes');
const { } = require('celebrate');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);