import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm/repository/Repository';
import { TestEntity } from './test.entity';
import { TestRepository } from './test.repository';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(TestRepository)
    private readonly testRepository: TestRepository,
  ) {}

  //@InjectRepository(TestRepository) private readonly testRepo: Repository<TestRepository> async getList(): Promise<TestEntity[]>{
  //return await this.testRepo.find();
  async findName(first_name: string, last_name: string): Promise<TestEntity> {
    const found = await this.testRepository.findOne({
      where: { first_name, last_name },
    });
    return found;
  }
}
