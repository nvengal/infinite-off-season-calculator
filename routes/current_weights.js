const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Weight = require('../models/current_weight');

router.post('/initializeCurrent', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let weight = new Weight({
    user_id: req.body.user_id,
    exercise: req.body.exercise,
    weight: req.body.weight
  });

  Weight.initializeCurrentWeight(weight, (err, weight) => {
    if (err) {
      res.json({success: false, msg: 'Failed to save weight'});
    } else {
      res.json({success: true, msg: 'Initialized current weight'});
    }
  });
});

router.post('/updateCurrent', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let newWeight = new Weight({
    user_id: req.body.user_id,
    exercise: req.body.exercise,
    weight: req.body.weight
  });

  Weight.updateCurrentWeight(newWeight, (err, weight) => {
    if (err) {
      res.json({success: false, msg: 'Failed to update weight'});
    } else {
      res.json({success: true, msg: 'Weight updated'});
    }
  });
});

router.post('/getCurrent', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Weight.getCurrentWeight(req.body.user_id, req.body.exercise, (err, weight) => {
    if (err) { 
      res.json({success: false, msg: "Error when retrieving current weight"});
    } else {
      res.json({succes: true, weight: weight.weight});
    }
  });
});

module.exports = router;
