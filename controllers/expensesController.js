const db = require('../models');

const index = (req, res) => {



    db.Expense.find( (err, foundExpenses) => {
        if (err) console.log('Error in expenses#index:', err)

        if (!foundExpenses) return res.json({
            message: 'No Expenses found in database.'
        })

        res.status(200).json({ expenses: foundExpenses });
    })
}

const show = (req, res) => {
    db.Expense.findById(req.params.id, (err, foundExpense) => {
        if (err) {
            console.log('Error in expenses#show:', err);

            if (!foundExpense) return res.json({
                message: 'There is no expense with this ID in the db.'
            })

            return res.send("Incomplete expenses#show controller function");
        }

        res.status(200).json({
            expense: foundExpense
        });
    })
};

const create = (req, res) => {
    db.Expense.create(req.body, (err, savedExpense) => {
        if (err) console.log('Error in expenses#create:', err)

        res.status(201).json({ expense: savedExpense })
    })
}

const update = (req, res) => {
    db.Expense.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedExpense) => {
        if (err) {
            console.log('Error in expenses#update:', err)

            return res.send("Incomplete expenses#update controller function");
        }

        res.status(200).json({
            updatedExpense
        });
    });
};

const destroy = (req, res) => {
    db.Expense.findByIdAndDelete(req.params.id, (err, deletedExpense) => {
        if (err) {
            console.log('Error in expenses#destroy:', err)

            return res.send("Incomplete expenses#destroy controller function");
        }

        res.status(200).json(
            {
                deletedExpense
            }
        );
    });
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};