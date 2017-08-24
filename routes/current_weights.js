const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Weight = require('../models/current_weight');

router.post('/addCurrent', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newWeight = new Weight({
    user_id: req.body.user_id,
    exercise: req.body.exercise,
    weight: req.body.weight,
    reps: req.body.reps
  });

  Weight.addCurrentWeight(newWeight, (err, weight) => {
    if (err) {
      res.json({success: false, msg: 'Failed to update current weight'});
    } else {
      res.json({success: true, msg: 'Current weight updated'});
    }
  });
});

router.post('/getCurrent', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Weight.getCurrentWeight(req.body.user_id, req.body.exercise, (err, current) => {
    if (err) throw err; 
    else if (!current[0]) { 
      res.json({success: false, msg: "Error when retrieving current weight"});
    } else {
      res.json({success: true, current: current[0]});
    }
  });
});

module.exports = router;
