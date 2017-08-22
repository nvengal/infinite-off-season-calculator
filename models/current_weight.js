const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const CurrentWeightSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    require: true
  },
  weight: {
    type: Number,
    required: true
  }
});

const CurrentWeight = module.exports = mongoose.model('CurrentWeight', CurrentWeightSchema);

module.exports.getCurrentWeight = function(user_id, exercise, callback) {
  const query = {user_id: user_id, exercise: exercise};
  CurrentWeight.findOne(query, callback);
}

module.exports.initializeCurrentWeight = function(weight, callback) {
  weight.save(callback);
}

module.exports.updateCurrentWeight = function(newWeight, callback) {
  const query = {user_id: newWeight.user_id, exercise: newWeight.exercise};
  CurrentWeight.updateOne(query, {$set: {weight: newWeight.weight}}, callback);
}
