import { Specification } from '../infra/typeorm/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecifictionRepository {
  create({ name, description }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification>;
}

export { ICreateSpecificationDTO, ISpecifictionRepository };
