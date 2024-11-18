import { newUserDTO } from 'src/user/dtos/new-user.dtos';
import { AuthService } from './auth.service';
import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserDetails } from 'src/user/user.interface';
import { ExistingUserDTO } from 'src/user/dtos/existing-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() user: newUserDTO): Promise<UserDetails | string | null> {
    return this.authService.register(user);
  }

  @Post('login')
  async login(@Body() existingUser: ExistingUserDTO) {
    const token = await this.authService.login(existingUser);

    if (!token) {
      return { message: 'Invalid credentials' };
    }

    return token;
  }

  @Post('verify-jwt')
  @HttpCode(HttpStatus.OK)
  verifyJwt(@Body() payload: { jwt: string }) {
    return this.authService.verifyJwt(payload.jwt);
  }
}
