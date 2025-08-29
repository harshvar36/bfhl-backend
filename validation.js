const validateInput = (req, res, next) => {
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({
            is_success: false,
            error: "Invalid JSON format"
        });
    }

    if (!req.body.data || !Array.isArray(req.body.data)) {
        return res.status(400).json({
            is_success: false,
            error: "Data must be an array"
        });
    }

    if (req.body.data.length === 0) {
        return res.status(400).json({
            is_success: false,
            error: "Data array cannot be empty"
        });
    }

    next();
};

module.exports = { validateInput };