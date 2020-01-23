import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BlogEntity } from './blog.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService extends TypeOrmCrudService<BlogEntity> {
  constructor(@InjectRepository(BlogEntity) repo: Repository<BlogEntity>) {
    super(repo);
  }
}
