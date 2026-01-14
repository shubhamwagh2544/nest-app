import {
  Body,
  Controller,
  Get,
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

@Controller('property')
export class PropertyController {
  @Get()
  findAll(): string {
    return 'list of properties';
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
    @Param('id') id: string,
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
}
