import { Module } from '@nestjs/common';
import { KytController } from './kyt.controller';
import { KytService } from './kyt.service';

@Module({
  controllers: [KytController],
  providers: [KytService],
})
export class KytModule {}
