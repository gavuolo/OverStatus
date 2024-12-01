import { Module } from '@nestjs/common';


import { PrismaModule } from './modules/prisma/prisma.module';
import { UsersModule } from './modules/users/users.module';
import { UsersController } from './modules/users/users.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './modules/auth/guards/roles.guard';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule],
  providers: [{provide: APP_GUARD, useClass: RolesGuard}]
})
export class AppModule {}
