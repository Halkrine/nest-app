import { Module } from '@nestjs/common';
import { AppController } from './test.controller';
import { TestService } from './test.service';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  providers: [TestService],
  controllers: [AppController],
})
export class TestModule {}
