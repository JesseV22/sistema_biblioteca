module.exports = {
    validateLoginInput: function(data) {
        const errors = {};

        if (!data.username || data.username.trim() === '') {
            errors.username = 'Username is required';
        }

        if (!data.password || data.password.trim() === '') {
            errors.password = 'Password is required';
        }

        return {
            errors,
            isValid: Object.keys(errors).length === 0
        };
    }
};