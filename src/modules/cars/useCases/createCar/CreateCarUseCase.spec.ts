import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { CreateCarUseCase } from './CreateCarUseCase';

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('Create car', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it('should be able to create a new car', async () => {
    await createCarUseCase.execute({
      name: 'Name car',
      description: 'Description car',
      daily_rate: 100,
      brand: 'brand',
      fine_amount: 60,
      category_id: 'category',
      license_plate: '123',
    });
  });
});
