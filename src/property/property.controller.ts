import {
  Body,
  Controller,
  Get,
  Headers,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePropertyDto } from './dtos/createProperty.dto';
import { ParseIdPipe } from './pipes/parseIdPipe';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema } from './dtos/createPropertyZodDto';
import { RequestHeader } from './pipes/request-header';
import { HeadersDto } from './dtos/headers.dto';
import { PropertyService } from './property.service';

@Controller('property')
export class PropertyController {
  constructor(private propertyService: PropertyService) {}
  @Get()
  findAll(): string {
    return this.propertyService.findAll();
  }
  @Post()
  @HttpCode(201)
  @UsePipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      groups: ['update'],
    }),
  )
  createProperty(@Body() body: CreatePropertyDto): string {
    return `${body.id}+${body.name}+${body.age}`;
  }
  @Get(':id')
  findPropertyById(@Param('id', ParseIntPipe) id: string): string {
    return id;
  }
  @Get(':id/:userId')
  @HttpCode(200)
  findPropertyByIdAndUserId(
    @Param('id', ParseIdPipe) id: string,
    @Param('userId') userId: string,
  ): string {
    return `${id}-${userId}`;
  }
  @Get(':id')
  findOne(@Query('sort', ParseBoolPipe) sort: boolean): string {
    if (!sort) {
      return 'false';
    }
    return 'true';
  }
  @Post()
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  createPropertyAnother(
    @Body() body: CreatePropertyDto,
    // @Headers() headers: Record<string, string>,
    @RequestHeader(new ValidationPipe({ validateCustomDecorators: true }))
    headers: HeadersDto,
  ): object {
    const host = headers['host'];
    if (host) {
      return headers;
    }
    return body;
  }
}
