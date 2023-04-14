const express = require("express");
require("dotenv").config();
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const app = express();
const port = process.env.PORT || 8000;
const host = "localhost";

app.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data: ReasonPhrases.OK,
    });
});

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
