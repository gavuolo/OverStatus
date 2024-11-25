import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../users.repository';
import { PrismaService } from 'nestjs-prisma';
import { CreateUserDTO } from '../../dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class PrismaUsersRepository implements UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(data: CreateUserDTO) {
    return await this.prisma.user.create({ data: data });
  }

  async findUserById(id: number) {
    return await this.prisma.user.findFirstOrThrow({ where: { id } });
  }

  async findUserByEmail(email: string): Promise<User> {
    return await this.prisma.user.findUnique({ where: { email } });
  }
}
