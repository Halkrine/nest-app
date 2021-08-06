import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import { TestService } from './test.service';
import { TestEntity } from './test.entity';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get('/findName')
  findName(
    @Query('first_name') first_name: string,
    @Query('last_name') last_name: string,
  ): Promise<TestEntity> {
    return this.testService.findName(first_name, last_name);
  }
}
