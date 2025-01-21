import { Test, TestingModule } from '@nestjs/testing';
import { VillanosService } from './villanos.service';

describe('VillanosService', () => {
  let service: VillanosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VillanosService],
    }).compile();

    service = module.get<VillanosService>(VillanosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
