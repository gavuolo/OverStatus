import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaUsersRepository } from './repository/implementations/prisma-users.repository';
import { UsersRepository } from './repository/users.repository';
import { UsersController } from './users.controller';
import { PrismaModule } from 'nestjs-prisma';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: UsersRepository, useClass: PrismaUsersRepository }], 
  exports: [UsersService, { provide: UsersRepository, useClass: PrismaUsersRepository }],
  imports: [PrismaModule]
})
export class UsersModule {}
