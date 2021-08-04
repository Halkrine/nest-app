import { IsNotEmpty } from 'class-validator'; // data 전송 시 해당 field의 유효성을 검사하는 lib

export class CreateUserDto {
  @IsNotEmpty()
  readonly first_name: string;

  @IsNotEmpty()
  readonly last_name: string;

  @IsNotEmpty()
  readonly usr_id: string;

  @IsNotEmpty()
  readonly secret: string;
}