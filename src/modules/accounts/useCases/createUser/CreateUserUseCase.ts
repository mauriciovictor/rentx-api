import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ICreateUserDTO } from '@modules/dtos/ICreateUserDTO';
import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository
  ) {}
  async execute({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadExist = await this.usersRepository.findByEmail(email);

    if (userAlreadExist) {
      throw new AppError('user already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      driver_license,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
