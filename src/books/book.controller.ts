import { Controller, Get, Post, Put, Delete, Param, Body, Patch, BadRequestException } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.model';
import { AddBookDto } from 'src/dtos/addBook.dto';
import { UpdateBookDto } from 'src/dtos/updateBook.dto';


@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get('/getList')
  async getAllBooks(): Promise<Book[]> { 
    return this.bookService.getAllBooks();
  }

  @Get('/:id')
  async getById(@Param('id') id:number): Promise<{title:string,author:string,year_of_publication:number}> {
      const data = await this.bookService.getById(id);
      const response = {
        title: data.title,
        author: data.author,
        year_of_publication: data.year_of_publication
      };
      if (!Object.keys(response).length) {
        throw new BadRequestException ('Bad request')
      }
      return response;
  }

  @Post('/addBook')
  async addBook(@Body() AddBookDto: AddBookDto): Promise<Book> {
    if (!Body.length){
        throw new BadRequestException ('Request body cannot be empty')
    }
    return this.bookService.addBook(AddBookDto);
  }

  @Patch('/updateBook/:id')
  async updateBook(@Param('id') id: number, @Body() UpdateBookDto: UpdateBookDto): Promise<Book[]> {
    if (!Object.keys(UpdateBookDto).length) {
        throw new BadRequestException ('Request body cannot be empty')
    }
    return this.bookService.updateBook(id, UpdateBookDto);
  }

  @Delete('/deleteBook/:id')
  async deleteBook(@Param('id') id: number): Promise<number> {
    console.log("deleteing log");
    return this.bookService.deleteBook(id);
  }
}
