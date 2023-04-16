"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("urlModels", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            urlCode: {
                type: Sequelize.STRING,
            },
            originalUrl: {
                type: Sequelize.STRING(1000),
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Original url is required",
                    },
                },
            },
            shortUrl: {
                type: Sequelize.STRING,
            },
            clicks: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("urlModels");
    },
};
