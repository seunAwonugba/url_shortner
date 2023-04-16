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

    async findShortUrl({ shortUrl }) {
        const findShortUrl = await urlModel.findOne({
            where: { shortUrl },
        });

        return findShortUrl;
    }

    // async decode({ shortUrl }) {
    //     const decode = await urlModel.findOne({
    //         where: { shortUrl },
    //     });

    //     if (decode == null) {
    //         throw new BadRequest(`No record found for short URL: ${shortUrl}`);
    //     }

    //     return decode;
    // }

    async redirect({ shortUrl }) {
        const decode = await urlModel.findOne({
            where: { shortUrl },
        });

        if (decode == null) {
            throw new BadRequest(`No record found for short URL: ${shortUrl}`);
        }

        decode.clicks += 1;

        await decode.save();

        return decode.originalUrl;
    }
}

module.exports = { UrlShortenerRepository };
