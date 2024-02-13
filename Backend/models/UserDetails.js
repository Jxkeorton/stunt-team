const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
});

const contactSchema = new mongoose.Schema({
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
});

const userDetailsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  measurements: measurementSchema,
  contact: contactSchema,
  description: {
    type: String
  }
});

const UserDetails = mongoose.model('UserDetails', userDetailsSchema);

module.exports = { UserDetails };