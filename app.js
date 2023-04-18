let express = require("express");
require("dotenv").config();
let { StatusCodes, ReasonPhrases } = require("http-status-codes");
let { errorMiddleware } = require("./middleware");
let { router } = require("./router/router");
let cors = require("cors");
let swaggerUi = require("swagger-ui-express");
let yamljs = require("yamljs");
let { sequelize } = require("./models/index");

let app = express();
let port = process.env.PORT || 8000;
let host = process.env.SERVER_HOST || "localhost";

let loadDocs = yamljs.load("./swagger.yaml");

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

module.exports = { app };
