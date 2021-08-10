import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { TestEntity } from './test.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestEntity)
    private readonly testRepository: Repository<TestEntity>,
  ) {}

  findName(first_name: string, last_name: string): Promise<TestEntity[]> {
    console.log("name : " + first_name + " " + last_name);
    return this.testRepository.find({
      select: ["first_name"],
      where: { first_name, last_name },
    });
    //console.log(Logger.log(""));
    //return found;
  }
}
