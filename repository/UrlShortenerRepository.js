const { urlmodel } = require("../models");

class UrlShortenerRepository {
    async encode({ urlCode, originalUrl, shortUrl }) {
        const data = { urlCode, originalUrl, shortUrl };

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
