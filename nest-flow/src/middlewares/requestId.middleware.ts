import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RequestIdMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    console.log('Middleware Hit: ', req.url);
    req.id = uuidv4(); // mark request as express request
    next();
  }
}
