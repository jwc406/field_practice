import { Test, TestingModule } from '@nestjs/testing';
import { JwUsersService } from './jw-users.service';

describe('JwUsersService', () => {
  let service: JwUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwUsersService],
    }).compile();

    service = module.get<JwUsersService>(JwUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
