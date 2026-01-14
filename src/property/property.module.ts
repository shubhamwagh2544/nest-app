import { Module, ValidationPipe } from '@nestjs/common';
import { PropertyController } from './property.controller';
import { APP_PIPE } from '@nestjs/core';
import { PropertyService } from './property.service';

@Module({
  controllers: [PropertyController],
  providers: [
    {
      // global validation for any specific module
      provide: APP_PIPE,
      /*useClass or useValue*/
      // useClass: ValidationPipe,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
    PropertyService,
  ],
})
export class PropertyModule {}
