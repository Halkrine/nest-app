import { Entity, EntityRepository, Repository } from 'typeorm';
import { TestEntity } from './test.entity';

@EntityRepository(TestEntity)
export class TestRepository extends Repository<TestEntity> {
  async findByName(first_name: string, last_name: string) {
    return this.createQueryBuilder('test')
      .where('test.first_name = : first_name', { first_name })
      .andWhere('test.last_name = : last_name', { last_name })
      .getMany();
  }
}
