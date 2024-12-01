import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from './enum/user-roles.enum';


@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {
  }

  @Post(':id')
  @Roles(Role.Admin)
  createAdmin(@Body() body: CreateUserDTO){
    const response = {...body, role: Role.Admin}
    return this.usersService.createUser(response)
  }

  @Post('')


  @Get('token')
  @Roles(Role.Admin)
  findUser(@Body() body: CreateUserDTO){
    return this.usersService.createUser(body)
  }
}


