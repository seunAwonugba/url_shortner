const { BadRequest } = require("../errors");
const { ValidateUrl } = require("../utils");
const { nanoid } = require("nanoid");
require("dotenv").config();
const {
    UrlShortenerRepository,
} = require("../repository/UrlShortenerRepository");

class UrlShortenerService {
    constructor() {
        this.repository = new UrlShortenerRepository();
    }

    async encode(payload) {
        const { originalUrl } = payload;

        if (!originalUrl) {
            throw new BadRequest("Original url is required");
        }

        const isValidUrl = ValidateUrl(originalUrl);

        if (!isValidUrl) {
            throw new BadRequest("Please provide a valid url");
        }

        const findOriginalUrl = await this.repository.findOriginalUrl({
            ...payload,
        });

        if (findOriginalUrl) {
            return {
                success: true,
                data: findOriginalUrl,
            };
        }

        const urlCode = nanoid(6);
        const shortUrl = `${process.env.BASE_URL}/${urlCode}`;

        const createShortUrl = await this.repository.encode({
            urlCode,
            originalUrl,
            shortUrl,
        });

        return {
            success: true,
            data: createShortUrl,
        };
    }

    async decode(payload) {
        const { shortUrl } = payload;

        if (!shortUrl) {
            throw new BadRequest("Short url is required");
        }

        if (!shortUrl.startsWith(process.env.BASE_URL)) {
            throw new BadRequest("Invalid 'short.est' short url");
        }

        const decode = await this.repository.decode({ ...payload });

        return {
            success: true,
            data: decode,
        };
    }

    async redirect(payload) {
        const { shortUrl } = payload;

        if (!shortUrl) {
            throw new BadRequest("Short url is required");
        }

        if (!shortUrl.startsWith(process.env.BASE_URL)) {
            throw new BadRequest("Invalid 'short.est' short url");
        }

        const redirect = await this.repository.redirect({ ...payload });

        return {
            success: true,
            data: redirect,
        };
    }
}

module.exports = { UrlShortenerService };
