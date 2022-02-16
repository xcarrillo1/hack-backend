const db = require('../models');

const index = (req, res) => {



    db.Income.find( (err, foundIncomes) => {
        if (err) console.log('Error in incomes#index:', err)

        if (!foundIncomes) return res.json({
            message: 'No Income found in database.'
        })

        res.status(200).json({ incomes: foundIncomes });
    })
}

const show = (req, res) => {
    db.Income.findById(req.params.id, (err, foundIncome) => {
        if (err) {
            console.log('Error in incomes#show:', err);

            if (!foundIncome) return res.json({
                message: 'There is no income with this ID in the db.'
            })

            return res.send("Incomplete incomes#show controller function");
        }

        res.status(200).json({
            income: foundIncome
        });
    })
};

const create = (req, res) => {
    db.Income.create(req.body, (err, savedIncome) => {
        if (err) console.log('Error in incomes#create:', err)

        res.status(201).json({ income: savedIncome })
    })
}

const update = (req, res) => {
    db.Income.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedIncome) => {
        if (err) {
            console.log('Error in incomes#update:', err)

            return res.send("Incomplete incomes#update controller function");
        }

        res.status(200).json({
            updatedIncome
        });
    });
};

const destroy = (req, res) => {
    db.Income.findByIdAndDelete(req.params.id, (err, deletedIncome) => {
        if (err) {
            console.log('Error in incomes#destroy:', err)

            return res.send("Incomplete incomes#destroy controller function");
        }

        res.status(200).json(
            {
                deletedIncome
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