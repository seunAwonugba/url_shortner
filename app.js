const express = require("express");
require("dotenv").config();
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { errorMiddleware } = require("./middleware");
const { router } = require("./router/router");
const app = express();
const port = process.env.PORT || 8000;
const host = "localhost";

app.use(express.json());

//left here deliberately to ascertain you have set up the app successfully upon clone
app.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data: ReasonPhrases.OK,
    });
});

app.use("/api/v1/", router);

app.use(errorMiddleware);

app.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});
