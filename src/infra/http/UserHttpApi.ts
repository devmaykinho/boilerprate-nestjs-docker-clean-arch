import { Body, Controller, Post } from '@nestjs/common';
import { CreateUser } from '../../application/usecases/CreateUser.usecase';
import { UserRepositoryMongoose } from '../database/mongodb/repository/UserRepositoryMongoose';

@Controller()
export class UserHttpApi {
  constructor(private readonly userRepository: UserRepositoryMongoose) {}

  @Post()
  async create(@Body() request: any): Promise<void> {
    const usecase = new CreateUser(this.userRepository);
    return await usecase.execute(request);
  }
}
