import { Module } from '@nestjs/common';
import { BlogService } from './blog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogEntity } from './blog.entity';
import { BlogController } from './blog.controller';

@Module({
  providers: [BlogService],
  imports: [TypeOrmModule.forFeature([BlogEntity])],
  controllers: [BlogController],
})
export class BlogModule {}
