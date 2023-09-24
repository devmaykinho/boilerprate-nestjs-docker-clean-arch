import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ collection: 'user' })
export class User {
  @Prop()
  name: string;

  @Prop()
  login: string;

  @Prop()
  password: string;

  @Prop()
  appOrigin: string;

  @Prop()
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
