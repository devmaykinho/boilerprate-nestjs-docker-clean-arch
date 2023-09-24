import { Module } from '@nestjs/common';
import { UserHttpApi } from './UserHttpApi';
import { MongodbModule } from '../database/mongodb/mongodb.module';

@Module({
  imports: [MongodbModule],
  controllers: [UserHttpApi],
})
export class ControllerModule {}
