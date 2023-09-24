import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../schema/User.schema';
import { UserRepository } from 'src/application/repository/User.repository';
import { User as UserDomain } from '../../../../domain/User';

@Injectable()
export class UserRepositoryMongoose implements UserRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  async create(user: UserDomain): Promise<void> {
    await this.userModel.create(user.get());
  }
}
