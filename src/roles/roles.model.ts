import { ApiProperty } from "@nestjs/swagger";
import { Model, BelongsToMany, Column, DataType, Table } from "sequelize-typescript";
import { User } from "src/users/users.model";
import { UserRoles } from "./user-roles.model";

interface RoleCreationAttrs {
  readonly value: string;
  readonly description: string;
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'id роли' })
  @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, autoIncrement: true })
  id: number;

  @ApiProperty({ example: 'ADMIN', description: 'Значение роли' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({ example: 'Администратор', description: 'Описание роли' })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRoles)
  users: User[]
}
