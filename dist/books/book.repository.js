"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const common_1 = require("@nestjs/common");
const book_model_1 = require("./book.model");
let BookRepository = class BookRepository {
    async findAll() {
        return book_model_1.Book.findAll({ order: [
                ['id', 'DESC']
            ] });
    }
    async findById(id) {
        return book_model_1.Book.findByPk(id);
    }
    async create(bookData) {
        return book_model_1.Book.create(bookData);
    }
    async update(id, bookData) {
        return book_model_1.Book.update(bookData, {
            where: { id },
            returning: true
        });
    }
    async delete(id) {
        return book_model_1.Book.destroy({
            where: { id },
        });
    }
};
exports.BookRepository = BookRepository;
exports.BookRepository = BookRepository = __decorate([
    (0, common_1.Injectable)()
], BookRepository);
//# sourceMappingURL=book.repository.js.map