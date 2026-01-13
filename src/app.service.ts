import { Injectable } from '@nestjs/common';
import { User } from './types/user';

@Injectable()
export class AppService {
  getHello(): User {
    return {
      id: 'hush',
      name: 'hush hush',
    };
  }
}
