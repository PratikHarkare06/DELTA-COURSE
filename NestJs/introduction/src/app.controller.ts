import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book} from "./Fakedatabase"

@Controller('books')
export class Bookscontroller {
  constructor(private readonly booksService: BooksService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getAllBooks(): Book []{
    return this.booksService.getAllBooks();
    // return "Book";

  }
  @Get('getById/:id')
getBookById(@Param('id') id: string): Book | undefined {
  const bookID = +id;
  return this.booksService.findById(bookID);
}
    // return "Book";
    
    @Post()
    addBook(@Body() book:Partial<Book>):Book | undefined{
      const bookData = book;

      if(!book.author || !book.titte ||!book.publicationYear) return undefined;
     return this.booksService.create(bookData);

    }
     
    @Put (':id')
    updateBook(
    @Param('id') id: string,
    @Body() book:Partial<Book>,
     ): Book | undefined{
      return this.booksService.update(+id,book)

    }
    @Delete(' :id')
    deleteBook(@Param('id') id: string):Book []{
      return this.booksService.delete(+id);
      

    }


  }
