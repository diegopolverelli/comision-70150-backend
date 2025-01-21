import { Test, TestingModule } from '@nestjs/testing';
import { VillanosController } from './villanos.controller';
import { VillanosService } from './villanos.service';

describe('VillanosController', () => {
  let controller: VillanosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VillanosController],
      providers: [VillanosService],
    }).compile();

    controller = module.get<VillanosController>(VillanosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
