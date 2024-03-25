import { Book } from './book.model';
export declare class BookRepository {
    findAll(): Promise<Book[]>;
    findById(id: number): Promise<Book | null>;
    create(bookData: Partial<Book>): Promise<Book>;
    update(id: number, bookData: Partial<Book>): Promise<[number, Book[]]>;
    delete(id: number): Promise<number>;
}
