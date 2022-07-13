interface ICreateUserDTO {
  name: string;
  password: string;
  id?: string;
  avatar?: string;
  email: string;
  driver_license: string;
}

export { ICreateUserDTO };
