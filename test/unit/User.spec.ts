import { User, UserInput } from '../../src/domain/User';

describe('User - Unit Test', () => {
  it('Should return an erro if application origin is DRIVER-APP and celphone is empty', () => {
    const userInput: UserInput = {
      name: 'Maycon',
      login: 'DEV@LOGSHARE',
      password: 'Log123',
      appOrigin: 'DRIVER-APP',
      email: 'dev@logshare.com',
    };
    expect(() => new User(userInput)).toThrow(
      'The celphone is riquerid to register an user on the mobile application',
    );
  });

  it('Should return an erro if application origin is BACKAUL-WEB and celphone is empty', () => {
    const userInput: UserInput = {
      name: 'Maycon',
      login: 'DEV@LOGSHARE',
      password: 'Log123',
      appOrigin: 'BACKAUL-WEB',
    };
    expect(() => new User(userInput)).toThrow(
      'The email is riquerid to register a user on the web application',
    );
  });

  it('Should return an user when user is valid', () => {
    const userInput: UserInput = {
      name: 'Maycon',
      login: 'DEV@LOGSHARE',
      password: 'Log123',
      appOrigin: 'BACKAUL-WEB',
      email: 'dev@logshare.com',
    };
    const user = new User(userInput);
    expect(user.get()).toEqual(userInput);
  });
});
