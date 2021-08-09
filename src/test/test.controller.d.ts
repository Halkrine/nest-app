import { TestService } from './test.service';
import { TestEntity } from '../entity/test.entity';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    getAll(): Promise<TestEntity[]>;
    findName(first_name: string, last_name: string): Promise<TestEntity>;
    getHello(): string;
}
