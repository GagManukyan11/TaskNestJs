import { BookService } from './book.service';
import { Book } from './book.model';
import { AddBookDto } from 'src/dtos/addBook.dto';
import { UpdateBookDto } from 'src/dtos/updateBook.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAllBooks(): Promise<Book[]>;
    getById(id: number): Promise<{
        title: string;
        author: string;
        year_of_publication: number;
    }>;
    addBook(AddBookDto: AddBookDto): Promise<Book>;
    updateBook(id: number, UpdateBookDto: UpdateBookDto): Promise<Book[]>;
    deleteBook(id: number): Promise<number>;
}
