import {
  Body,
  Controller,
  HttpCode,
  Post,
  Req,
  UseGuards,
  UseInterceptors,
  UsePipes,
  Request,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './dtos/app.dto';
import { ValidationPipe } from './pipes/validation.pipe';
import { AuthGaurd } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { AppExceptionFilter } from './filters/appExecption.filter';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @UseGuards(AuthGaurd)
  @UseInterceptors(LoggingInterceptor)
  @UseFilters(AppExceptionFilter)
  post(
    @Req() req: Request,
    @Body()
    body: LoginDto,
  ): LoginDto {
    console.log('Controller Hit: ', req.url);
    return this.appService.post(body);
  }
}
