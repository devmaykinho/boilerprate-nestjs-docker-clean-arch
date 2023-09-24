import { User } from '../../domain/User';

export interface UserRepository {
  create: (input: User) => Promise<void>;
}
