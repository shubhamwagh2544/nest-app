import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findOne(userFilterQuery: object): Promise<User | null> {
    return this.userModel.findOne(userFilterQuery);
  }

  async find(userFilterQuery: object): Promise<User[]> {
    return this.userModel.find(userFilterQuery);
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  async findOneAndUpdate(
    userFilterQuery: object,
    user: Partial<User>,
  ): Promise<User | null> {
    return this.userModel.findOneAndUpdate(userFilterQuery, user, {
      new: true,
    });
  }
}
