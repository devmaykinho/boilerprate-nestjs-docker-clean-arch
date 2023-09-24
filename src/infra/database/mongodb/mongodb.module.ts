import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/User.schema';
import { UserRepositoryMongoose } from './repository/UserRepositoryMongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const base_connection_string = configService.get<string>(
          'MONGODB_CONNECTION_STRING',
        );
        const dbName = configService.get<string>('MONGODB_DATABASE_NAME');
        const user = configService.get<string>('MONGODB_DATABASE_USER');
        const pass = configService.get<string>('MONGODB_DATABASE_PASS');
        const uri = base_connection_string;

        return {
          uri,
          dbName,
          user,
          pass,
        };
      },
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserRepositoryMongoose],
  exports: [UserRepositoryMongoose],
})
export class MongodbModule {}
