"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeBookModel = exports.Book = void 0;
const sequelize_1 = require("sequelize");
class Book extends sequelize_1.Model {
}
exports.Book = Book;
function initializeBookModel(sequelize) {
    Book.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        year_of_publication: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'books',
        timestamps: true,
        underscored: true
    });
}
exports.initializeBookModel = initializeBookModel;
//# sourceMappingURL=book.model.js.map