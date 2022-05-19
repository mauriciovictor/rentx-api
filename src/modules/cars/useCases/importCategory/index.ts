import { CategoryRepository } from '../../repositories/implementations/CategoryRepositories';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categorýRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categorýRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase
);

export { importCategoryController };
