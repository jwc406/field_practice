import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { JwUsersModule } from './jw-users/jw-users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://project:qwer1234@cluster0.d2fbt.mongodb.net/test'), JwUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
