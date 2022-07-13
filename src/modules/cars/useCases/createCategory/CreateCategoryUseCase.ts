import { ICategoryRepository } from '@modules/cars/repositories/ICategoriesRepositoty';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryReposijtory: ICategoryRepository
  ) {}
  async execute({ name, description }: IRequest): Promise<void> {
    const categoryAlreadExists = await this.categoryReposijtory.findByName(
      name
    );

    if (categoryAlreadExists) {
      throw new AppError('category alread exists!');
    }

    this.categoryReposijtory.create({ name, description });
  }
}

export { CreateCategoryUseCase };
