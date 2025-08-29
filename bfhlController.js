const { processData } = require('../utils/dataProcessor');

const processBfhl = (req, res) => {
    try {
        const { data } = req.body;
        
        const processedData = processData(data);
        
        res.status(200).json({
            is_success: true,
            user_id: "john_doe_15102000", // Replace with actual logic
            email: "john.doe@example.com",
            roll_number: "12345678",
            ...processedData
        });
    } catch (error) {
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
};

module.exports = { processBfhl };