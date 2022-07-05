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

  async getOne(id: number) {
    return await this.JwUserModel.find({ id: id });
  }

  async create(JwData: CreateUserDto) {
    const latestId = await this.JwUserModel.findOne();
    return await this.JwUserModel.create({
      ...JwData,
      id: parseInt(latestId ? latestId.id : 0) + 1,
    });
  }

  async update(id: number, updateData: UpdateUserDto) {
    try {
      await this.JwUserModel.where({ id: id }).update(updateData);
      return true;
    } catch (e) {
      return false;
    }
  }

  async delete(id: number) {
    try {
      await this.JwUserModel.remove({ id: id });
      return true;
    } catch (e) {
      return false;
    }
  }
}

// create(createJwUserDto: CreateJwUserDto) {
//   return 'This action adds a new jwUser';
// }

// findAll() {
//   return `This action returns all jwUsers`;
// }

//   findOne(id: number) {
//     return `This action returns a #${id} jwUser`;
//   }

//   update(id: number, updateJwUserDto: UpdateJwUserDto) {
//     return `This action updates a #${id} jwUser`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} jwUser`;
//   }
//
