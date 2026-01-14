import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateOrReject } from 'class-validator';
import { Request } from 'express';

export const RequestHeader = createParamDecorator(
  async (targetDto: new () => object, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();
    const headers = request.headers;
    const dto = plainToInstance(targetDto, headers, {
      excludeExtraneousValues: true,
    });
    await validateOrReject(dto);
    return dto;
  },
);
