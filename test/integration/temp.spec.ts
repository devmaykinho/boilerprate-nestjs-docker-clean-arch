import { Collection, connect, connection, model } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { UserRepositoryMongoose } from '../../src/infra/database/mongodb/repository/UserRepositoryMongoose';
import { User } from '../../src/domain/User';
import {
  UserDocument,
  UserSchema,
} from '../../src/infra/database/mongodb/schema/User.schema';

describe('UserRepositoryMongoose - Integrations test', () => {
  let server: MongoMemoryServer;
  let collection: Collection;

  const userModel = model<UserDocument>('user', UserSchema);
  const userRepository = new UserRepositoryMongoose(userModel);

  beforeAll(async () => {
    server = await MongoMemoryServer.create();

    await connect(server.getUri(), { dbName: 'test' });

    collection = connection.collection('user');
  });

  afterEach(async () => {
    if (connection) {
      await collection.deleteMany({});
    }
  });

  afterAll(async () => {
    if (connection) {
      await connection.destroy();
      await server.stop();
    }
  });

  describe('create', () => {
    it('deve criar um usuário', async () => {
      const user = new User({
        name: 'Maycon',
        login: 'DEV@LOGSHARE',
        password: 'Log123',
        appOrigin: 'BACKAUL-WEB',
        email: 'dev@logshare.com',
      });
      await userRepository.create(user);
      const userCreated = await userModel.find().exec();
      expect(userCreated[0]).toMatchObject({
        name: 'Maycon',
        login: 'DEV@LOGSHARE',
        password: 'Log123',
        appOrigin: 'BACKAUL-WEB',
        email: 'dev@logshare.com',
      });
    });
  });
});
