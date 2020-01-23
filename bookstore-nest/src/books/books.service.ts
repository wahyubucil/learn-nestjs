import { Injectable, HttpException } from '@nestjs/common';
import { BOOKS } from 'src/mocks/books.mock';
import { Book } from './books.interface';

@Injectable()
export class BooksService {
  books = BOOKS;

  getBooks(): Promise<Array<Book>> {
    return new Promise(resolve => {
      resolve(this.books);
    });
  }

  getBook(id: number): Promise<Book> {
    return new Promise(resolve => {
      const book = this.books.find(book => book.id === id);
      if (!book) throw new HttpException('Book does not exist!', 404);
      resolve(book);
    });
  }

  addBook(book: Book): Promise<Book> {
    return new Promise(resolve => {
      this.books.push(book);
      resolve(book);
    });
  }

  deleteBook(id: number): Promise<void> {
    return new Promise(resolve => {
      const index = this.books.findIndex(book => book.id === id);
      if (index === -1) throw new HttpException('Book does not exist!', 404);
      this.books.splice(index, 1);
      resolve();
    });
  }
}
