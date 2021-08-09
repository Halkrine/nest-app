import { Repository } from 'typeorm';
import { TestEntity } from '../entity/test.entity';
export declare class TestService {
    private readonly testRepository;
    constructor(testRepository: Repository<TestEntity>);
    getAll(): Promise<TestEntity[]>;
    findName(first_name: string, last_name: string): Promise<TestEntity>;
    getHello(): string;
}
