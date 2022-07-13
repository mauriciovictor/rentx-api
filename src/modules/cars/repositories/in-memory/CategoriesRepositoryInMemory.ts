import { Category } from '@modules/cars/infra/typeorm/Category';

import { ICategoryDTO, ICategoryRepository } from '../ICategoriesRepositoty';

class CategoriesRepositoryInMemory implements ICategoryRepository {
  categories: Category[] = [];
  async findByName(name: string): Promise<Category> {
    const category = this.categories.find((category) => category.name === name);

    return category;
  }

  async list(): Promise<Category[]> {
    const { categories } = this;
    return categories;
  }
  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, { name, description });

    this.categories.push(category);
  }
}

export { CategoriesRepositoryInMemory };
