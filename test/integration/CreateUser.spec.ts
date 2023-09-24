import { mock } from 'jest-mock-extended';
import { CreateUser } from '../../src/application/usecases/CreateUser.usecase';
import { UserRepository } from 'src/application/repository/User.repository';
import { UserInput, User } from '../../src/domain/User';

describe('CreateUser UseCase - Integration test', () => {
  const userRepository = mock<UserRepository>();
  beforeEach(() => {
    userRepository.create.mockResolvedValue();
  });
  it('Should call create user adapter', async () => {
    const userInput: UserInput = {
      name: 'Maycon',
      login: 'DEV@LOGSHARE',
      password: 'Log123',
      appOrigin: 'BACKAUL-WEB',
      email: 'dev@logshare.com',
    };
    const user = new User(userInput);
    const usecase = new CreateUser(userRepository);
    await usecase.execute(userInput);
    expect(userRepository.create).toHaveBeenCalledWith(user);
  });

  it('Should return an error when adapter throw error', async () => {
    userRepository.create.mockImplementation(() => {
      throw new Error('Error');
    });
    const userInput: UserInput = {
      name: 'Maycon',
      login: 'DEV@LOGSHARE',
      password: 'Log123',
      appOrigin: 'BACKAUL-WEB',
      email: 'dev@logshare.com',
    };
    const usecase = new CreateUser(userRepository);
    await expect(usecase.execute(userInput)).rejects.toThrow(
      new Error('Error'),
    );
  });
});
