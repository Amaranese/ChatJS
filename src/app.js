const express = require('express');
const app = express();
const path = require('path');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;
