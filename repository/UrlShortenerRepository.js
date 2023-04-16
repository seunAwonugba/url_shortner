const { urlModel } = require("../models");

class UrlShortenerRepository {
    async encode({ urlCode, originalUrl, shortUrl }) {
        const data = { urlCode, originalUrl, shortUrl };

        const encode = await urlModel.create({ ...data });
        return encode;
    }

    async findOriginalUrl({ originalUrl }) {
        console.log(urlModel);
        const findOriginalUrl = await urlModel.findOne({
            where: { originalUrl },
        });

        return findOriginalUrl;
    }
}

module.exports = { UrlShortenerRepository };
