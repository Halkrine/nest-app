import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestRepository } from './test.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestRepository])],
  providers: [TestService],
  controllers: [TestController],
})
export class TestModule {}
