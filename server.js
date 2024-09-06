
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);

const PORT = process.env.PORT || 4700;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
