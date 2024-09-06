const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/add', authMiddleware, addExpense);
router.get('/view/:user_id', authMiddleware, getExpenses);

module.exports = router;
