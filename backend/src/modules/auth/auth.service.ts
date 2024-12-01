import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UsersRepository } from '../users/repository/users.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private AUDIENCE: string = 'users';
  private ISSUER: string = 'Gavuolo';
  private EXPIRATION_TIME = '1 day';
  constructor(
    private readonly usersService: UsersService,
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
  ) {}

  async signIn({}){
    
  }
}
