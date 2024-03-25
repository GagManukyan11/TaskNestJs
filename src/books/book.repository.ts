import { Injectable } from '@nestjs/common';
import { Book } from './book.model';

@Injectable()
export class BookRepository {
  async findAll(): Promise<Book[]> {
    return Book.findAll({order:[
      ['id','DESC']
    ]});
  }

  async findById(id: number): Promise<Book | null> {
    return Book.findByPk(id);
  }

  async create(bookData: Partial<Book>): Promise<Book> {   
    return Book.create(bookData);
  }

  async update(id: number, bookData: Partial<Book>): Promise<[number, Book[]]> {
    return Book.update(bookData, {
      where: { id },
      returning: true
    });
  }

  async delete(id: number): Promise<number> {
    return Book.destroy({
      where: { id },
    });
  }
}
