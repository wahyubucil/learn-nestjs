import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './books.interface';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  async getBooks(): Promise<Array<Book>> {
    const books = await this.bookService.getBooks();
    return books;
  }

  @Get(':bookID')
  async getBook(@Param('bookID') bookID: string): Promise<Book> {
    const id = Number(bookID);
    const book = await this.bookService.getBook(id);
    return book;
  }

  @Post()
  async addBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    const book = await this.bookService.addBook(createBookDto);
    return book;
  }

  @Delete(':bookID')
  async deleteBook(@Param('bookID') bookID: string) {
    const id = Number(bookID);
    await this.bookService.deleteBook(id);
  }
}
