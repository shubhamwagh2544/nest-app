import { IsInt, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString({ always: true })
  @Length(2, 10, { message: 'custom error message', groups: ['create'] })
  @Length(1, 5, { message: 'custom error message', groups: ['update'] })
  name: string;
  @IsInt({ always: true })
  id: number;
  @IsInt({ always: true })
  age: number;
}
