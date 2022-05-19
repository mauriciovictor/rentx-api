import { SpecificationRepository } from '../../repositories/implementations/SpecificationRepositoty';

interface IRequest {
  name: string;
  description: string;
}
class CreateSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationRepository) {}

  execute({ name, description }: IRequest): void {
    console.log({ name, description });
    const specificationAlreadExists =
      this.specificationsRepository.findByName(name);

    if (specificationAlreadExists) {
      throw new Error('Specification alread exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
