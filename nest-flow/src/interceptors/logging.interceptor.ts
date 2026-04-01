import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    console.log('Interceptor Hit Request', req.url);
    return next.handle().pipe(
      tap(() => console.log('Interceptor Hit Response')),
      catchError((err: Error) => {
        console.log('Interceptor Hit Error');
        return throwError(() => err);
      }),
    );
  }
}
