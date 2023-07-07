import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JwUserDocument = JwUser & Document;

@Schema()
export class JwUser {
  @Prop()
  userId: string;

  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const JwUserSchema = SchemaFactory.createForClass(JwUser);
