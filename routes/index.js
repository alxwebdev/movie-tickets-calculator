const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.redirect('/calculator');
});

router.get('/calculator', (req, res) => {
  res.render('calculator');
});

router.post('/calculator', (req, res) => {
  // Movies
  const batman = req.body.movie === 'batman';
  const potter = req.body.movie === 'potter';
  const taxi = req.body.movie === 'taxi';

  // Civil status
  const single = req.body.status === 'single';
  const married = req.body.status === 'married';

  // Income
  const income = parseInt(req.body.income);

  // Logic
  let data = {};

  if (batman && single && income <= 15000) {
    data.movie = 'Batman The Dark Knight';
    data.status = 'Single';
    data.result = 'Yes, you can have a free ticket. Enjoy!';
    data.income = income;
    res.render('result', { data });
  } else if (batman && married && income <= 5000) {
    data.movie = 'Batman The Dark Knight';
    data.status = 'Married';
    data.result = 'Yes, you can have a free ticket. Enjoy!';
    data.income = income;
    res.render('result', { data });
  } else if (potter && single && income <= 15000) {
    data.movie = 'Harry Potter';
    data.status = 'Single';
    data.result = 'Yes, you can have a free ticket. Enjoy!';
    data.income = income;
    res.render('result', { data });
  } else if (potter && married && income <= 5000) {
    data.movie = 'Harry Potter';
    data.status = 'Married';
    data.result = 'Yes, you can have a free ticket. Enjoy!';
    data.income = income;
    res.render('result', { data });
  } else if (taxi && single && income <= 15000) {
    data.movie = 'Taxi Driver';
    data.status = 'Single';
    data.result = 'Yes, you can have a free ticket. Enjoy!';
    data.income = income;
    res.render('result', { data });
  } else if (taxi && married && income <= 5000) {
    data.movie = 'Taxi Driver';
    data.status = 'Married';
    data.result = 'Yes, you can have a free ticket. Enjoy!';
    data.income = income;
    res.render('result', { data });
  } else {
    data.movie = req.body.movie;
    data.status = req.body.status;
    data.result = 'So sorry. You are not eligible for a free ticket.';
    data.income = income;
    res.render('result', { data });
  }
});

module.exports = router;
