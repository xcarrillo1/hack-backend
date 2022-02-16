const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI;

const configOptions = {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
};

mongoose.connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDB connection error: ${err}`));

module.exports = {
  Goal: require('./Goal'),
  Expense: require('./Expense'),
  Income: require('./Income')
};