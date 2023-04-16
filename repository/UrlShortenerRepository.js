const { log } = require("console");
const { urlModel } = require("../models");
const { BadRequest } = require("../errors");

class UrlShortenerRepository {
    async encode({ urlCode, originalUrl, shortUrl }) {
        const data = { urlCode, originalUrl, shortUrl };

        const encode = await urlModel.create({ ...data });
        return encode;
    }

    async findOriginalUrl({ originalUrl }) {
        const findOriginalUrl = await urlModel.findOne({
            where: { originalUrl },
        });

        return findOriginalUrl;
    }

    async decode({ shortUrl }) {
        const decode = await urlModel.findOne({
            where: { shortUrl },
        });

        if (decode == null) {
            throw new BadRequest(`No record found for short URL: ${shortUrl}`);
        }

        return decode;
    }
}

module.exports = { UrlShortenerRepository };
