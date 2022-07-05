import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-jw-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
