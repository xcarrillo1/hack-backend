const db = require('../models');

const index = (req, res) => {

    

    db.Goal.find( (err, foundGoals) => {
        if (err) console.log('Error in goals#index:', err)

        if (!foundGoals) return res.json({
            message: 'No Goals found in database.'
        })

        res.status(200).json({ goals: foundGoals });
    })
}

const show = (req, res) => {
    db.Goal.findById(req.params.id, (err, foundGoal) => {
        if (err) {
            console.log('Error in goals#show:', err);

            if (!foundGoal) return res.json({
                message: 'There is no goal with this ID in the db.'
            })

            return res.send("Incomplete goals#show controller function");
        }

        res.status(200).json({
            goal: foundGoal
        });
    })
};

const create = (req, res) => {
    db.Goal.create(req.body, (err, savedGoal) => {
        if (err) console.log('Error in goals#create:', err)

        res.status(201).json({ goal: savedGoal })
    })
}

const update = (req, res) => {
    db.Goal.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedGoal) => {
        if (err) {
            console.log('Error in goals#update:', err)

            return res.send("Incomplete goals#update controller function");
        }

        res.status(200).json({
            updatedGoal
        });
    });
};

const destroy = (req, res) => {
    db.Goal.findByIdAndDelete(req.params.id, (err, deletedGoal) => {
        if (err) {
            console.log('Error in goals#destroy:', err)

            return res.send("Incomplete goals#destroy controller function");
        }

        res.status(200).json(
            {
                deletedGoal
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