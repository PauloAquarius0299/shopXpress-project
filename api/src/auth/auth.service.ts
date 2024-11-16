import { UserService } from './../user/user.service';
import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { newUserDTO } from 'src/user/dtos/new-user.dtos';
import { UserDetails } from 'src/user/user.interface';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async register(
    user: Readonly<newUserDTO>,
  ): Promise<UserDetails | string | null> {
    const { name, email, password } = user;

    const existingUser = await this.userService.findByEmail(email);

    if (existingUser) return 'Email token!';

    const hashedPassword = await this.hashPassword(password);

    const newUser = await this.userService.create(name, email, hashedPassword);
    return this.userService._getUserDetails(newUser);
  }
}
