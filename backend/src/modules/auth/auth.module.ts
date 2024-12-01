import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/repository/users.repository';
import { PrismaUsersRepository } from '../users/repository/implementations/prisma-users.repository';
import { PrismaService } from 'nestjs-prisma';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }), 
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    PrismaService,
    UsersService,
    { provide: UsersRepository, useClass: PrismaUsersRepository },
  ],
})
export class AuthModule {}
