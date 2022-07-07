import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-jw-user.dto';
import { UpdateUserDto } from './dto/update-jw-user.dto';
import { JwUsersService } from './jw-users.service';
import { JwUser } from './schemas/jw-users.schema';

@Controller('jw-users')
export class JwUsersController {
  constructor(private readonly jwUsersService: JwUsersService) {}

  @Get()
  async getAll(): Promise<JwUser[]> {
    return await this.jwUsersService.getAll();
  }

  // @Get()
  // async getAll() {
  //   return await this.jwUsersService.getAll();
  // }

  @Get('/:id')
  async getOne(@Param('id') JwId: number): Promise<JwUser[]> {
    console.log(JwId);
    return await this.jwUsersService.getOne(JwId);
  }

  @Post()
  async create(@Body() JwData: CreateUserDto) {
    return await this.jwUsersService.create(JwData);
  }

  @Patch('/:id')
  async update(@Param('id') JwId: number, @Body() updateData: UpdateUserDto) {
    return this.jwUsersService.update(JwId, updateData);
  }

  @Delete('/:id')
  async delete(@Param('id') JwId: number) {
    return this.jwUsersService.delete(JwId);
  }
}
