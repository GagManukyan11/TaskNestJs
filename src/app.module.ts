import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {DatabaseModule} from './core/database/database.module';
import {ConfigModule} from "@nestjs/config";
import {BookController} from './books/book.controller';
import {BookRepository} from './books/book.repository';
import {BookService} from './books/book.service';

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}),
        DatabaseModule
    ],
    controllers: [AppController, BookController],
    providers: [AppService, BookRepository, BookService],
})
export class AppModule {
}
