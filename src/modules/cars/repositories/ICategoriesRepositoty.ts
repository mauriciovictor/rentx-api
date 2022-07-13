import { Category } from '../infra/typeorm/Category';

interface ICategoryDTO {
  name: string;
  description: string;
}
interface ICategoryRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICategoryDTO): Promise<void>;
}

export { ICategoryRepository, ICategoryDTO };
