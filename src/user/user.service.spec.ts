import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service.js';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should say hello', () => {
    const response = service.sayHello("Muhammad Mujahid");
    expect(response).toBe("Hello Muhammad Mujahid");
  });
});
