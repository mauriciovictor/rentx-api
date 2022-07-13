import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';

import { ICarsRepository } from '../ICarsRepository';
import { ICategoryDTO } from '../ICategoriesRepositoty';

class CarsRepositoryInMemory implements ICarsRepository {
  create(data: ICreateCarDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

export { CarsRepositoryInMemory };
