import { Test, TestingModule } from '@nestjs/testing';
import { KytController } from './kyt.controller';

describe('KytController', () => {
  let controller: KytController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KytController],
    }).compile();

    controller = module.get<KytController>(KytController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
