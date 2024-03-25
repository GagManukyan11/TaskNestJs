"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const common_1 = require("@nestjs/common");
const book_service_1 = require("./book.service");
const addBook_dto_1 = require("../dtos/addBook.dto");
const updateBook_dto_1 = require("../dtos/updateBook.dto");
let BookController = class BookController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async getAllBooks() {
        return this.bookService.getAllBooks();
    }
    async getById(id) {
        const data = await this.bookService.getById(id);
        const response = {
            title: data.title,
            author: data.author,
            year_of_publication: data.year_of_publication
        };
        if (!Object.keys(response).length) {
            throw new common_1.BadRequestException('Bad request');
        }
        return response;
    }
    async addBook(AddBookDto) {
        if (!common_1.Body.length) {
            throw new common_1.BadRequestException('Request body cannot be empty');
        }
        return this.bookService.addBook(AddBookDto);
    }
    async updateBook(id, UpdateBookDto) {
        if (!Object.keys(UpdateBookDto).length) {
            throw new common_1.BadRequestException('Request body cannot be empty');
        }
        return this.bookService.updateBook(id, UpdateBookDto);
    }
    async deleteBook(id) {
        console.log("deleteing log");
        return this.bookService.deleteBook(id);
    }
};
exports.BookController = BookController;
__decorate([
    (0, common_1.Get)('/getList'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)('/addBook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [addBook_dto_1.AddBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Patch)('/updateBook/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateBook_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "updateBook", null);
__decorate([
    (0, common_1.Delete)('/deleteBook/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookController.prototype, "deleteBook", null);
exports.BookController = BookController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [book_service_1.BookService])
], BookController);
//# sourceMappingURL=book.controller.js.map