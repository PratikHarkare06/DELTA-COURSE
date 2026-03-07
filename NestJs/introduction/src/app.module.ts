import { Module } from '@nestjs/common';
import {Bookscontroller } from './app.controller';
import { BooksService } from './app.service';

@Module({
  imports: [],
  controllers: [Bookscontroller],
  providers: [BooksService],
})
export class AppModule {}
