const express = require('express');
const router = express.Router();
const cars = ["Saab", "Volvo", "BMW"];
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send([{ name: "mimi" }, { name: "ayla" }])
});
//post
router.post('/', function (req, res, next) {
  cars.push(req.body.name);
  res.send(cars);
});
//delete
router.delete('/', function (req, res, next) {
  cars.slice(req.body.name);
  res.send(cars);
});
module.exports = router;
