import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwUser, JwUserDocument } from './schemas/jw-users.schema';
import { CreateUserDto } from './dto/create-jw-user.dto';
import { UpdateUserDto } from './dto/update-jw-user.dto';

@Injectable()
export class JwUsersService {
  constructor(
    @InjectModel(JwUser.name) private JwUserModel: Model<JwUserDocument>,
  ) {}

  async getAll(): Promise<JwUser[]> {
    return await this.JwUserModel.find().exec();
  }

  async getOne(name: string) {
    return await this.JwUserModel.find({ name: name });
  }

  async create(JwData: CreateUserDto) {
    return await this.JwUserModel.create({
      ...JwData,
    });
  }

  async update(id: string, updateData: UpdateUserDto) {
    try {
      await this.JwUserModel.where({ _id: id }).update(updateData);
      return true;
    } catch (e) {
      return false;
    }
  }

  async delete(id: string) {
    try {
      await this.JwUserModel.remove({ _id: id });
      return true;
    } catch (e) {
      return false;
    }
  }
}
