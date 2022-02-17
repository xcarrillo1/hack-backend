const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema({
    category: String,
    endDate: Date,
    currentAmt: Number,
    endAmt: Number,
});

const Goal = mongoose.model('Goal', GoalSchema);

module.exports = Goal;