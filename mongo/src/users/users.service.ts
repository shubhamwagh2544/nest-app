import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './schemas/user.schema';
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UsersRepository) {}

  async getUser(userId: string): Promise<User | null> {
    return this.userRepository.findOne({ userId });
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async createUser(
    email: string,
    age: number,
    favouriteFoods: string[],
  ): Promise<User> {
    return this.userRepository.create({
      userId: uuidv4(),
      email,
      age,
      favouriteFoods: favouriteFoods ?? [],
    });
  }

  async updateUser(
    userId: string,
    updateUser: UpdateUserDto,
  ): Promise<User | null> {
    return this.userRepository.findOneAndUpdate({ userId }, updateUser);
  }
}
