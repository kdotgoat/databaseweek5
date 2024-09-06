
const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.registerUser = (req, res) => {
  const { username, password } = req.body;


  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) return res.status(500).json({ error: err.message });

    
    const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });

      res.status(201).json({ message: 'User registered successfully!' });
    });
  });
};

exports.loginUser = (req, res) => {
    const { username, password } = req.body;
  
    
    const query = 'SELECT * FROM Users WHERE username = ?';
    db.query(query, [username], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      if (results.length === 0) return res.status(401).json({ error: 'Invalid username or password' });
  
      const user = results[0];
  
      
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!isMatch) return res.status(401).json({ error: 'Invalid username or password' });
  
        res.status(200).json({ message: 'Login successful!' });
      });
    });
  };
  