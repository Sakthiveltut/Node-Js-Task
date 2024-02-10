const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/user-data', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
