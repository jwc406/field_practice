import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JwUserDocument = JwUser & Document;

@Schema()
export class JwUser {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  address: string;

  @Prop()
  job: string;
}

export const JwUserSchema = SchemaFactory.createForClass(JwUser);
