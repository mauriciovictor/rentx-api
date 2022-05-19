import { Category } from '../models/Category';

interface ICategoryDTO {
  name: string;
  description: string;
}
interface ICategoryRepository {
  findByName(name: string): Category | undefined;
  list(): Category[] | undefined;
  create({ name, description }: ICategoryDTO): void;
}

export { ICategoryRepository, ICategoryDTO };
