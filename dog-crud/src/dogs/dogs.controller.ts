import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { DogDto } from 'src/interfaces/dog.dto';
import { DogRepository } from './dogs.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('dogs')
export class DogsController {
  constructor(
    @InjectRepository(DogRepository)
    private readonly dogRepository: DogRepository,
  ) {}

  @Post()
  create(@Body() dogDto: DogDto) {
    return this.dogRepository.createDog(dogDto);
  }

  @Get()
  findAll() {
    return this.dogRepository.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogRepository.findOneDog(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dogDto: DogDto) {
    return this.dogRepository.updateDog(id, dogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogRepository.removeDog(id);
  }
}
