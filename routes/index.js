var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ title: 'Express', ip: req.ip });
});

router.get('/error', (req, res, next) => {
  throw Error('Something is wrong...');
});

module.exports = router;
