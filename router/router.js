const express = require("express");
const { UrlShortenerService } = require("../service/UrlShortenerService");
const { StatusCodes } = require("http-status-codes");
// const { log } = require("console");
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

router.post("/decode", async (req, res, next) => {
    try {
        const decode = await urlShortenerService.decode(req.body);
        return res.status(StatusCodes.OK).json(decode);
    } catch (error) {
        next(error);
    }
});

router.get("/redirect", async (req, res, next) => {
    try {
        const redirect = await urlShortenerService.redirect(req.body);
        return res.status(StatusCodes.OK).redirect(redirect.data);
    } catch (error) {
        next(error);
    }
});

router.get("/statistic/:url_path", async (req, res, next) => {
    try {
        const stats = await urlShortenerService.statistic(req.params.url_path);
        return res.status(StatusCodes.OK).json(stats);
    } catch (error) {
        next(error);
    }
});

module.exports = { router };
