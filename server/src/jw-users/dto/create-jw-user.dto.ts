import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userId: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}
