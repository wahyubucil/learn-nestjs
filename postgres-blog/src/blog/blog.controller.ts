import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { BlogService } from './blog.service';
import { BlogEntity } from './blog.entity';

@Crud({
  model: {
    type: BlogEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('blog')
export class BlogController {
  constructor(public service: BlogService) {}
}
