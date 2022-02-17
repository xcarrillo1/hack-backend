const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    category: String,
    amount: Number,
});

const Expense = mongoose.model('Expense', ExpenseSchema);

module.exports = Expense;