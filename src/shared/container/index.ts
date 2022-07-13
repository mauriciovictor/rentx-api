import { UserRepository } from '@modules/accounts/infra/repositories/UserRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CategoryRepository } from '@modules/cars/infra/repositories/CategoryRepositories';
import { SpecificationRepository } from '@modules/cars/infra/repositories/SpecificationRepositoty';
import { ICategoryRepository } from '@modules/cars/repositories/ICategoriesRepositoty';
import { ISpecifictionRepository } from '@modules/cars/repositories/ISpecificationRespository';
import { container } from 'tsyringe';

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
);

container.registerSingleton<ISpecifictionRepository>(
  'SpecificationRepository',
  SpecificationRepository
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
