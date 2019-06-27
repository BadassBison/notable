const express = require('express');
const logger = require('./middleware/logger');

// Initialize express
const app = express();

// Logger middleware
app.use(logger);

// Body parcer middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/employees', require('./routes/api/employees'));
app.use('/api/customers', require('./routes/api/customers'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));