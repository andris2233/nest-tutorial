import { ApiProperty } from "@nestjs/swagger";
import { Model, Column, DataType, Table } from "sequelize-typescript";

interface UserCreationAttrs {
  readonly email: string;
  readonly password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'id пользователя' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({ example: 'user@example.com', description: 'email пользователя' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: '1234567', description: 'пароль пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'false', description: 'Флаг бана пользователя' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: '<Причина бана>', description: 'Причина бана' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
