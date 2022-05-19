import { Category } from '../../models/Category';
import { CategoryRepository } from '../../repositories/implementations/CategoryRepositories';

class ListCategoriesUseCase {
  constructor(private categoryReposijtory: CategoryRepository) {}

  execute(): Category[] | undefined {
    const categories = this.categoryReposijtory.list();
    return categories;
  }
}

export { ListCategoriesUseCase };
