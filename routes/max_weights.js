const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const Max = require('../models/max_weight');

router.post('/addMax', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  let max = new Max({
    user_id: req.body.user_id,
    exercise: req.body.exercise,
    weight: req.body.weight,
  });
  Max.addMax(max, (err, max) => {
    if (err) {
      res.json({success: false, msg: 'Failed to save new max'});
    } else {
      res.json({success: true, msg: 'Saved new max'});
    }
  });
});

router.post('/getMax', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  Max.getMax(req.body.user_id, req.body.exercise, (err, weights) => {
    if (err) throw err;
    if (weights[0]) {
      res.json({success: true, max: weights[0].weight});
    } else {
      res.json({success: false, msg: "Failed to retrieve max"});
    }
  });
});

module.exports = router;
