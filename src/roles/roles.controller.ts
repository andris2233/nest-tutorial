import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {

  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Создание роли' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: 'Получение роли по value' })
  @ApiResponse({ status: 200, type: Role })
  @Get(':value')
  getOne(@Param() params) {
    return this.rolesService.getByValue(params.value);
  }
}
