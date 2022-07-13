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

  @Get('/:name')
  async getOne(@Param('name') userName: string): Promise<JwUser[]> {
    console.log(userName);
    return await this.jwUsersService.getOne(userName);
  }

  @Post()
  async create(@Body() JwData: CreateUserDto) {
    return await this.jwUsersService.create(JwData);
  }

  @Patch('/:name')
  async update(
    @Param('name') userName: string,
    @Body() updateData: UpdateUserDto,
  ) {
    return this.jwUsersService.update(userName, updateData);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return this.jwUsersService.delete(id);
  }
}
