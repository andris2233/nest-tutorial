import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'email пользователя' })
  readonly email: string;

  @ApiProperty({ example: '1234567', description: 'пароль пользователя' })
  readonly password: string;
}
