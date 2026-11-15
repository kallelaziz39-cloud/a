import { Test, TestingModule } from '@nestjs/testing';
import { StudantsService } from './studants.service';

describe('StudantsService', () => {
  let service: StudantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudantsService],
    }).compile();

    service = module.get<StudantsService>(StudantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
