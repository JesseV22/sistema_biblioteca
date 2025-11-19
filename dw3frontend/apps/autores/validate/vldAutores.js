module.exports = {
    validateAuthorInput: function(authorData) {
        const errors = [];

        if (!authorData.name || authorData.name.trim() === '') {
            errors.push('Author name is required.');
        }

        if (!authorData.email || !/\S+@\S+\.\S+/.test(authorData.email)) {
            errors.push('A valid email is required.');
        }

        if (authorData.age && (isNaN(authorData.age) || authorData.age < 0)) {
            errors.push('Age must be a positive number.');
        }

        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
};