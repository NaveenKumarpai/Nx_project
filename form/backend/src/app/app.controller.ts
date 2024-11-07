import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { createUserDto } from './create-user.dto';
import { updateUserDto } from './update-user.dto';

@Controller('User')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('getUsers')
  getData() {
    return this.appService.get();
  }

  @Post('addUser')
  store(@Body() createUserDto: createUserDto){
    return this.appService.create(createUserDto)
  }

  @Patch('updateUser/:userId')
    update(
     @Body() updateUserDto:updateUserDto,
     @Param('userId', ParseIntPipe) userId: string){
        
        return this.appService.update(updateUserDto,userId)
        
    }

    @Get('getUser/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: string){
        return this.appService.show(userId);
    }

    @Delete('deleteUser/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId:number ){
        return this.appService.delete(userId)
    }
    
}
