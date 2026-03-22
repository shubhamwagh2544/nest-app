import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './users.service';
import { User } from './schemas/user.schema';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get(':userId')
  async getUser(@Param('userId') userId: string): Promise<User | null> {
    return this.usersService.getUser(userId);
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUser(
      createUserDto.email,
      createUserDto.age,
      createUserDto.favouriteFoods,
    );
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User | null> {
    return this.usersService.updateUser(userId, updateUserDto);
  }
}
