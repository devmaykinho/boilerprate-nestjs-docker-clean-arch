import { User, UserInput } from '../../domain/User';
import { UserRepository } from '../repository/User.repository';

export class CreateUser {
  constructor(private readonly createUser: UserRepository) {}

  async execute(input: UserInput): Promise<void> {
    this.createUser.create(new User(input));
  }
}
