// imports
require("dotenv").config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const port = process.env.PORT || 4000;
const app = express();

app.use(cors());

app.use(express.json());

// Routes
app.use('/api/v1/goals', routes.goals);
app.use('/api/v1/expenses', routes.expenses);
app.use('/api/v1/incomes', routes.incomes);

// Database connection
app.listen(port, () => console.log(`Server is running on port ${port}`));