const express = require('express');
const router = express.Router();
const pets = require("../model/Petsmodel");

//add 
router.post('/add', function (req, res, next) {
    pets.insertMany(req.body, function (err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

//get
  router.get('/getall', function (req, res, next) {
    pets.find({}, function (err, result) {
      if (err) {
        res.send(err);
      }
      else {
        res.send(result)
      }
    });
  }); 

  //delete
  router.delete('/delete', function (req, res, next) {
 
    res.send("req.params.id");
}); 

//update
router.put('/update/:id', function (req, res, next) {
    pets.findOneAndUpdate({_id:req.params.id},req.body).then(function(pets){
    pets.findOne({_id:req.params.id}).then(function(pets){
      res.send(pets);
  
    });
    });
  });
  
  module.exports = router;