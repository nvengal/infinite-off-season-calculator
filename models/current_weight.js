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
  },
  reps: {
    type: Number,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const CurrentWeight = module.exports = mongoose.model('CurrentWeight', CurrentWeightSchema);

module.exports.getCurrentWeight = function(user_id, exercise, callback) {
  const query = {user_id: user_id, exercise: exercise};
  CurrentWeight.find(query).sort('-date').exec(callback);
}

module.exports.addCurrentWeight = function(newWeight, callback) {
  newWeight.save(callback);
}

