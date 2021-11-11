const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SnapSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user_id: {
    type: Schema.ObjectId,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Snap', SnapSchema);
