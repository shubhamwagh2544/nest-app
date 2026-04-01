import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // no req in pipe => pipe designed only to validate data
    console.log('Pipe Hit');
    return value;
  }
}
