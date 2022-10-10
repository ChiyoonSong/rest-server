import { Controller, Get } from '@nestjs/common';
import { KytService } from './kyt.service';

@Controller('kyt')
export class KytController {
  constructor(private readonly kytservice: KytService) {}

  @Get('/transfer/received')
  getReceivedTransaction(): string {
    return 'transfer received tx info';
  }

  @Get('/transfer/sent')
  getSentTransaction(): string {
    return 'transfer sent tx info';
  }
}
