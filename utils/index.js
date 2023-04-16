const validUrl = require("valid-url");

module.exports.ValidateUrl = (url) => {
    const isValidUrl = validUrl.isWebUri(url);
    return isValidUrl;
};
