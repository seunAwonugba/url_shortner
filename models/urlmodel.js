"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class UrlModel extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    UrlModel.init(
        {
            urlCode: {
                type: DataTypes.STRING,
            },
            originalUrl: {
                type: DataTypes.STRING(1000),
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Original url is required",
                    },
                },
            },
            shortUrl: DataTypes.STRING,
            clicks: {
                type: DataTypes.INTEGER,
                defaultValue: 0,
            },
        },
        {
            sequelize,
            tableName: "urlModels",
            modelName: "urlModel",
        }
    );
    return UrlModel;
};
