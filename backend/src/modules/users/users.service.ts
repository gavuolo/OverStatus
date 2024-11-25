import { ConflictException, Injectable } from '@nestjs/common';
import { UsersController } from './users.controller';
import { CreateUserDTO } from './dto/create-user.dto';
import { UsersRepository } from './repository/users.repository';
import { PrismaUsersRepository } from './repository/implementations/prisma-users.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    
  constructor(private readonly userRepository: UsersRepository ) {
  }

  async createUser(body: CreateUserDTO) {
    const email = await this.userRepository.findUserByEmail(body.email);
    if (email) throw new ConflictException('Email já cadastrado');

    const passwordHashed = bcrypt.hashSync(body.password, 10);
    const user = await this.userRepository.createUser({
      ...body,
      password: passwordHashed,
    });
 
    return user;
  }
}
