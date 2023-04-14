const { urlmodel } = require("../models");

class UrlShortenerRepository {
    async encode({ originalUrl }) {
        const data = { originalUrl };

        const encode = await urlmodel.create({ ...data });
        return encode;
    }
}
