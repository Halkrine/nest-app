import { EntityRepository, Repository } from 'typeorm';
import { TestEntity } from './test.entity';

@EntityRepository(TestEntity)
export class TestRepository extends Repository<TestEntity> {}