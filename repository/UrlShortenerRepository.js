const { urlmodel } = require("../models");

class UrlShortenerRepository {
    async encode({ urlCode, originalUrl, shortUrl, clicks }) {
        const data = { urlCode, originalUrl, shortUrl, clicks };

        const encode = await urlmodel.create({ ...data });
        return encode;
    }

    async findOriginalUrl({ originalUrl }) {
        const findOriginalUrl = await urlmodel.findOne({
            where: { originalUrl },
        });

        return findOriginalUrl;
    }
}

module.exports = { UrlShortenerRepository };
