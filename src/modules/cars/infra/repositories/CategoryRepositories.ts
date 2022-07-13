import { Category } from '@modules/cars/infra/typeorm/Category';
import {
  ICategoryDTO,
  ICategoryRepository,
} from '@modules/cars/repositories/ICategoriesRepositoty';
import { getRepository, Repository } from 'typeorm';

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }
  async create({ name, description }: ICategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });
    return category;
  }
}

export { CategoryRepository };
