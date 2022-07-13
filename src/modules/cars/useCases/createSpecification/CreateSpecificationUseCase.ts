import { SpecificationRepository } from '@modules/cars/infra/repositories/SpecificationRepositoty';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private specificationsRepository: SpecificationRepository
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    console.log({ name, description });
    const specificationAlreadExists =
      await this.specificationsRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new AppError('Specification alread exists!');
    }

    await this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
