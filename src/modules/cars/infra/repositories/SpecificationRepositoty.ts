import { Specification } from '@modules/cars/infra/typeorm/Specification';
import {
  ICreateSpecificationDTO,
  ISpecifictionRepository,
} from '@modules/cars/repositories/ISpecificationRespository';
import { getRepository, Repository } from 'typeorm';

class SpecificationRepository implements ISpecifictionRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  private static INSTANCE: SpecificationRepository;

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  async create({ name, description }: ICreateSpecificationDTO) {
    const specification = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specification);
  }

  async findByName(name: string): Promise<Specification> {
    const specification = await this.repository.findOne({ name });

    return specification;
  }
}

export { SpecificationRepository };
