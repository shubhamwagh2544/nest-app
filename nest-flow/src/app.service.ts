import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/app.dto';

@Injectable()
export class AppService {
  post(body: LoginDto): LoginDto {
    console.log('Service Hit');
    throw new BadRequestException({
      message: 'something went wrong',
      data: {},
    });
    return body;
  }
}
