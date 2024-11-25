import { Module } from '@nestjs/common';


import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';

@Module({
  imports: [UsersModule, PrismaModule]
})
export class AppModule {}
