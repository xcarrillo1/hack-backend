// imports
const router = require('express').Router();
const ctrl = require('../controllers');

// routes
router.get('/', ctrl.expenses.index);
router.get('/:id', ctrl.expenses.show);
router.post('/', ctrl.expenses.create);
router.put('/:id', ctrl.expenses.update);
router.delete('/:id', ctrl.expenses.destroy);

// exports
module.exports = router;