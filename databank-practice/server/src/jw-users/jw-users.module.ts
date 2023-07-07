import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwUsersController } from './jw-users.controller';
import { JwUsersService } from './jw-users.service';
import { JwUser, JwUserSchema } from './schemas/jw-users.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JwUser.name, schema: JwUserSchema }]),
  ],
  controllers: [JwUsersController],
  providers: [JwUsersService],
})
export class JwUsersModule {}
