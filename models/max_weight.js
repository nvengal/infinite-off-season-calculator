const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const MaxWeightSchema = mongoose.Schema({
  user_id: String, 
  exercise: String, 
  weight: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const MaxWeight = module.exports = mongoose.model('MaxWeight', MaxWeightSchema);

module.exports.addMax = function(newWeight, callback) {
  newWeight.save(callback);
}

module.exports.getMax = function(user_id, exercise, callback) {
  MaxWeight.find({user_id: user_id, exercise: exercise}).sort('-date').exec(callback);
}

