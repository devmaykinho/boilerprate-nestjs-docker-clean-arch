import { Test, TestingModule } from '@nestjs/testing';
import { UserHttpApi } from '../../src/infra/http/UserHttpApi';
import { UserRepositoryMongoose } from '../../src/infra/database/mongodb/repository/UserRepositoryMongoose';

describe('UserHttpApi', () => {
  let userHttpApi: UserHttpApi;
  const createUserMock = jest.fn();

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserHttpApi],
      providers: [UserRepositoryMongoose],
    })
      .overrideProvider(UserRepositoryMongoose)
      .useValue({ create: createUserMock.mockResolvedValue(undefined) })
      .compile();

    userHttpApi = app.get<UserHttpApi>(UserHttpApi);
  });

  describe('UserHttpApi - Integration test', () => {
    it('Should create user', async () => {
      const response = await userHttpApi.create({});
      expect(response).toBeUndefined();
    });

    it('Should throw an erro when usercase fail', async () => {
      createUserMock.mockImplementation(() => {
        throw new Error('Error');
      });
      await expect(userHttpApi.create({})).rejects.toThrow(new Error('Error'));
    });
  });
});
