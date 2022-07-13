import { UsersRepositoryInMemory } from '@modules/accounts/repositories/in-memory/UsersRepositoryInMemory';
import { CreateUserUseCase } from '@modules/accounts/useCases/createUser/CreateUserUseCase';
import { ICreateUserDTO } from '@modules/dtos/ICreateUserDTO';

import { AppError } from '@shared/errors/AppError';

import { AuthenticateUserUseCase } from './AuthenticateUseCase';

describe('Authenticate User', () => {
  let authenticateUseCase: AuthenticateUserUseCase;
  let usersRepositoryInMemory: UsersRepositoryInMemory;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it('should be able to authenticate an user', async () => {
    const user: ICreateUserDTO = {
      driver_license: '000303',
      email: 'test@gmail.com',
      password: '123',
      name: 'user teste',
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty('token');
  });

  it('should not be able authenticate am nonexisten user', () => {
    expect(async () => {
      await authenticateUseCase.execute({
        email: 'false@gmail',
        password: '132',
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able authenticate with incorrent password', () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        driver_license: '000303',
        email: 'test@gmail.com',
        password: '123',
        name: 'user teste',
      };

      await createUserUseCase.execute(user);

      await authenticateUseCase.execute({
        email: user.email,
        password: 'incorrent',
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
