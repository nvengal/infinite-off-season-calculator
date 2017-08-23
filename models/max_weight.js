const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const MaxWeightSchema = mongoose.Schema({
  user_id: {
    type: String,
    required: true
  },
  exercise: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
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
  const query = {user_id: user_id, exercise: exercise};
  MaxWeight.find(query).sort('-date').exec(callback);
}

