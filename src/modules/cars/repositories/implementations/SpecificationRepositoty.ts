import { Specification } from '../../models/Specification';
import {
  ICreateSpecificationDTO,
  ISpecifictionRepository,
} from '../ISpecificationRespository';

class SpecificationRepository implements ISpecifictionRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  private static INSTANCE: SpecificationRepository;

  public static getInstance(): SpecificationRepository {
    if (!SpecificationRepository.INSTANCE) {
      SpecificationRepository.INSTANCE = new SpecificationRepository();
    }
    return SpecificationRepository.INSTANCE;
  }

  create({ name, description }: ICreateSpecificationDTO) {
    const specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      created_at: new Date(),
    });

    this.specifications.push(specification);
  }

  findByName(name: string): Specification | undefined {
    const specification = this.specifications.find(
      (specification) => specification.name === name
    );

    return specification;
  }
}

export { SpecificationRepository };
