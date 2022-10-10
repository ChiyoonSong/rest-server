import { Test, TestingModule } from '@nestjs/testing';
import { KytService } from './kyt.service';

describe('KytService', () => {
  let service: KytService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KytService],
    }).compile();

    service = module.get<KytService>(KytService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
