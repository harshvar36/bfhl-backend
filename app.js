const express = require('express');
const bodyParser = require('body-parser');
const { validateInput } = require('validation');
const { processBfhl } = require('bfhlController');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/bfhl', validateInput, processBfhl);

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', message: 'API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: "Something went wrong!"
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Endpoint not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;
