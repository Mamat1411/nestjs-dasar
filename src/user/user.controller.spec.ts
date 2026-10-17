import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller.js';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [],
      providers: []
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be able to say hello', async () => {
    const response = await controller.sayHello('Muhammad', "Mujahid");
    expect(response).toBe('Hello Muhammad Mujahid')
  });
});
