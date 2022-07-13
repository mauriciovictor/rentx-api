import { CategoryRepository } from '@modules/cars/infra/repositories/CategoryRepositories';
import { Category } from '@modules/cars/infra/typeorm/Category';
import { inject, injectable } from 'tsyringe';

@injectable()
class ListCategoriesUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryReposijtory: CategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoryReposijtory.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
