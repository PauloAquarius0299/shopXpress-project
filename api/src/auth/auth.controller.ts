import { newUserDTO } from 'src/user/dtos/new-user.dtos';
import { AuthService } from './auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { UserDetails } from 'src/user/user.interface';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: newUserDTO): Promise<UserDetails | string | null> {
    return this.authService.register(user);
  }
}
