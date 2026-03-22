import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  email: string;

  @IsNumber()
  age: number;

  @IsArray()
  favouriteFoods: string[];
}

export class UpdateUserDto {
  @IsNumber()
  age: number;

  @IsArray()
  favouriteFoods: string[];
}
