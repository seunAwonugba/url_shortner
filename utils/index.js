const validUrl = require("valid-url");

module.exports.ValidateUrl = (url) => {
    try {
        const isValidUrl = validUrl.isUri(url);
        return isValidUrl;
    } catch (error) {
        return error;
    }
};
