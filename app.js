const express = require("express");
require("dotenv").config();
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const { errorMiddleware } = require("./middleware");
const { router } = require("./router/router");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const yamljs = require("yamljs");
const { sequelize } = require("./models/index");

const app = express();
const port = process.env.PORT || 8000;
const host = "localhost";

const loadDocs = yamljs.load("./swagger.yaml");

app.use(express.json());
app.use(cors());

//left here deliberately to ascertain you have set up the app successfully upon clone
app.get("/", (req, res) => {
    return res.status(StatusCodes.OK).json({
        success: true,
        data: ReasonPhrases.OK,
    });
});

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(loadDocs));

app.use("/api/v1/", router);

app.use(errorMiddleware);

const testDbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log("DB Connection has been established successfully.");

        app.listen(port, host, () => {
            console.log(`Server is listening on http://${host}:${port}`);
        });
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};

testDbConnection();
