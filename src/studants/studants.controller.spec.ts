import { Test, TestingModule } from '@nestjs/testing';
import { StudantsController } from './studants.controller';
import { StudantsService } from './studants.service';

describe('StudantsController', () => {
  let controller: StudantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudantsController],
      providers: [StudantsService],
    }).compile();

    controller = module.get<StudantsController>(StudantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
