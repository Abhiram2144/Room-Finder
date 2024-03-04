const mongoose = require('mongoose');

const pgSchema = new mongoose.Schema({
  collegeId: {
    type : mongoose.Schema.Types.ObjectId,
    ref: 'College',
    required: true
  },
  pgName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  roomsVacant: {
    type: Number,
    required: true
  },
  rent: {
    type: Number,
    required: true
  },
  cityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City',
    required: true
  },
  images: {
    type: [String],
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Pg = mongoose.model('Pg', pgSchema);

module.exports = Pg;
