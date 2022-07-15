import { Test, TestingModule } from '@nestjs/testing';
import { JwUsersController } from './jw-users.controller';
import { JwUsersService } from './jw-users.service';

describe('JwUsersController', () => {
  let controller: JwUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JwUsersController],
      providers: [JwUsersService],
    }).compile();

    controller = module.get<JwUsersController>(JwUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
