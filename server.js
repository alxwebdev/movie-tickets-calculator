const express = require('express');
const app = express();

// BodyParse
app.use(express.urlencoded({ extended: true }));

// Ejs
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));

// Static folder
app.use(express.static(__dirname + '/public'));

// Launch server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`...Calculator Server Has Started on PORT: ${PORT}...`)
);
