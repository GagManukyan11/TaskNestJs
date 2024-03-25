import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { Book } from './book.model';


@Injectable()
export class BookService {
  constructor(private readonly bookRepository: BookRepository) {}

  async getAllBooks(): Promise<Book[]> {
    return this.bookRepository.findAll();
  }

  async getById(id:number): Promise<Book> {
    return this.bookRepository.findById(id);
  }

  async addBook(bookData: Partial<Book>): Promise<Book> {
    return this.bookRepository.create(bookData);
  }

  async updateBook(id: number, bookData: Partial<Book>): Promise<Book[]> {
      const [, updatedBooksCount] = await this.bookRepository.update(id, bookData);
    return updatedBooksCount; 
  }

  async deleteBook(id: number): Promise<number> {
    return this.bookRepository.delete(id);
  }
}
