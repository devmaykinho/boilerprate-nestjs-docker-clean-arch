import { MongoMemoryServer } from 'mongodb-memory-server';
import { UserRepositoryMongoose } from '../../src/infra/database/mongodb/repository/UserRepositoryMongoose';
import { User } from '../../src/domain/User';
import { Collection, connect, connection, model } from 'mongoose';
import {
  UserDocument,
  UserSchema,
} from '../../src/infra/database/mongodb/schema/User.schema';

describe('UserRepositoryMongoose - Integrations test', () => {
  const userModel = model<UserDocument>('user', UserSchema);
  const userRepository = new UserRepositoryMongoose(userModel);

  let server: MongoMemoryServer;
  let collection: Collection;

  beforeAll(async () => {
    server = await MongoMemoryServer.create();
    await connect(server.getUri(), { dbName: 'test' });
    collection = connection.collection('user');
  });

  afterEach(async () => {
    await collection.deleteMany();
  });

  afterAll(async () => {
    await connection.destroy();
    await server.stop();
  });

  describe('create', () => {
    it('deve criar um usuário', async () => {
      const user = new User({
        name: 'Maycon',
        login: 'DEV@MAYKINHO',
        password: 'Log123',
        appOrigin: 'BACKAUL-WEB',
        email: 'dev@maykinho.com',
      });
      await userRepository.create(user);
      const userCreated = await userModel.find().exec();
      expect(userCreated[0]).toMatchObject({
        name: 'Maycon',
        login: 'DEV@MAYKINHO',
        password: 'Log123',
        appOrigin: 'BACKAUL-WEB',
        email: 'dev@maykinho.com',
      });
    });
  });
});
