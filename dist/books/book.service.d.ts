import { BookRepository } from './book.repository';
import { Book } from './book.model';
export declare class BookService {
    private readonly bookRepository;
    constructor(bookRepository: BookRepository);
    getAllBooks(): Promise<Book[]>;
    getById(id: number): Promise<Book>;
    addBook(bookData: Partial<Book>): Promise<Book>;
    updateBook(id: number, bookData: Partial<Book>): Promise<Book[]>;
    deleteBook(id: number): Promise<number>;
}
