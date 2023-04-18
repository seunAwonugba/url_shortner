require("dotenv").config();
const request = require("supertest");

// process.env.NODE_ENV = "test";
process.env.PG_USER = "postgres";
process.env.PG_PASSWORD = "temidayo";
process.env.PG_DB_TEST = "url_shortener_db_test";
process.env.PG_HOST = "localhost";
process.env.PG_DIALECT = "postgres";

const db = require("../models");
const baseURL = "http://localhost:8000/api/v1/";
const { app } = require("../app");

//Before each test we empty the database
beforeEach((done) => {
    db.sequelize
        .sync({ force: true })
        .then(() => done())
        .catch((err) => done(err));
});

describe("encode long url", () => {
    it("should encode long urls", async () => {
        const res = await request(app).post("/api/v1/encode").send({
            originalUrl:
                "https://www.google.com/search?q=sequelise+connect+to+db&oq=sequelise+connect+to+db&aqs=chrome..69i57j0i13i512l9.7061j0j7&sourceid=chrome&ie=UTF-8",
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.success).toBe(true);
        expect(res.body.data.originalUrl).toBe(
            "https://www.google.com/search?q=sequelise+connect+to+db&oq=sequelise+connect+to+db&aqs=chrome..69i57j0i13i512l9.7061j0j7&sourceid=chrome&ie=UTF-8"
        );
        expect(res.body.data.clicks).toBe(0);
    });
});

describe("encode long url without url returns", () => {
    it("should not encode empty urls", async () => {
        const res = await request(app).post("/api/v1/encode").send({
            originalUrl: "",
        });
        expect(res.statusCode).toBe(400);
        expect(res.body.success).toBe(false);
        expect(res.body.data).toBe("Original url is required");
    });
});
