import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [DatabaseModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
