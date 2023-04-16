const express = require("express");
const { UrlShortenerService } = require("../service/UrlShortenerService");
const { StatusCodes } = require("http-status-codes");
const router = express.Router();

const urlShortenerService = new UrlShortenerService();

router.post("/encode", async (req, res, next) => {
    try {
        const encode = await urlShortenerService.encode(req.body);
        return res.status(StatusCodes.CREATED).json(encode);
    } catch (error) {
        next(error);
    }
});

router.get("/decode", async (req, res, next) => {
    try {
        const decode = await urlShortenerService.decode(req.body);
        return res.status(StatusCodes.CREATED).json(decode);
    } catch (error) {
        next(error);
    }
});

module.exports = { router };
