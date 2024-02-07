import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdatePutUserDTO } from "./dto/update-put-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/intrerceptors/log.interceptor";

@Controller('users')

export class UserController {

    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.userService.create(data)
    }
    // ler tudo do banco
    @Get()
    async list() {
        return this.userService.list();
    }
    // ler apenas um registro
    @Get(':id')
    async show(@Param('id', ParseIntPipe) id: number) {
        return this.userService.show(id)
    }
    /* UPDATE COM PUT */
    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.userService.update(id, data);
    }
      /* UPDATE COM PUT */
    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number){
        return this.userService.updatePartial(id, data);
    }
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return this.userService.delete(id)
    }

}
