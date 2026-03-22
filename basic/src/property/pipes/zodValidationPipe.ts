import { BadRequestException, PipeTransform } from '@nestjs/common';
import { Writeable } from 'zod/v3';
import { ZodError, ZodNumber, ZodObject, ZodString } from 'zod';
import { $strip } from 'zod/v4/core';

export class ZodValidationPipe implements PipeTransform {
  constructor(
    private zodSchema: ZodObject<
      Writeable<{ name: ZodString; id: ZodNumber; age: ZodNumber }>,
      $strip
    >,
  ) {}

  transform(value: any): any {
    try {
      const parsed = this.zodSchema.safeParse(value);
      if (parsed.success) {
        return parsed.data;
      }
    } catch (err: any) {
      if (err instanceof ZodError) {
        return new BadRequestException(err.issues);
      }
      throw new BadRequestException('validation failed!');
    }
  }
}
