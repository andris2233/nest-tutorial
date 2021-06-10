import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getOne(@Param() params) {
    this.usersService.getById(params.id);
  }
}
