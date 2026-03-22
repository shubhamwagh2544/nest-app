import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable() // to use it outside of this module
export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val)) {
      throw new BadRequestException('id must be a number');
    } else if (val < 0) {
      throw new BadRequestException('id must be a positive');
    }
    return val;
  }
}
