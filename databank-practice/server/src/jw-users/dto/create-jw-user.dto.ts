import { IsString, IsNumber } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly address: string;

  @IsString()
  readonly job: string;
}
