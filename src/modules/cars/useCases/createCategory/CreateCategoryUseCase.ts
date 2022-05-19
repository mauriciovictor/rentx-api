import { CategoryRepository } from '../../repositories/implementations/CategoryRepositories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoryReposijtory: CategoryRepository) {}

  execute({ name, description }: IRequest): void {
    const categoryAlreadExists = this.categoryReposijtory.findByName(name);

    if (categoryAlreadExists) {
      throw new Error('category alread exists!');
    }

    this.categoryReposijtory.create({ name, description });
  }
}

export { CreateCategoryUseCase };
