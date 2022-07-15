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

  // GET
  @Get()
  async getAll(): Promise<JwUser[]> {
    return await this.jwUsersService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return await this.jwUsersService.getOne(id);
  }

  @Post()
  async create(@Body() JwData: CreateUserDto) {
    return await this.jwUsersService.create(JwData);
  }

  @Patch('/:id')
  async update(@Param('id') id: string, @Body() updateData: UpdateUserDto) {
    return this.jwUsersService.update(id, updateData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.jwUsersService.delete(id);
  }
}
