import { UserRepository } from '@modules/accounts/infra/repositories/UserRepository';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub } = verify(token, '123456789') as IPayload;

    const userRepository = new UserRepository();

    const user = await userRepository.findById(sub);

    if (!user) {
      throw new AppError('User does not exist', 401);
    }

    request.user = {
      id: user.id,
    };

    next();
  } catch (error) {
    throw new AppError('invalid token', 401);
  }
}
