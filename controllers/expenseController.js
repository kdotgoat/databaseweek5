
const db = require('../config/db');

exports.addExpense = (req, res) => {
  const { user_id, amount, date, category } = req.body;

  const query = 'INSERT INTO Expenses (user_id, amount, date, category) VALUES (?, ?, ?, ?)';
  db.query(query, [user_id, amount, date, category], (error, results) => {
    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json({ message: 'Expense added successfully!' });
  });
};

exports.getExpenses = (req, res) => {
    const { user_id } = req.params;
  
    const query = 'SELECT * FROM Expenses WHERE user_id = ?';
    db.query(query, [user_id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
  
      res.status(200).json(results);
    });
  };
  
