// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppController } from './app.controller';
// import { User } from './user.entity'; 
// import { AppService } from './app.service';

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { LoginEntities } from "./login-components/login-entites";
import { LoginService } from "./login-components/login.app.service";

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: '',
//       database: 'reg',
//       entities: [User],
//       synchronize: false,
//     }),
//     TypeOrmModule.forFeature([User]),
//   ],
//   controllers: [AppController],
//   providers: [AppService], 
//   exports: [AppService],
// })
// export class AppModule {}

@Module({
  imports:[
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username:'root',
      password:'',
      database:'login',
      entities:[LoginEntities],
      synchronize: false,

      
    }),
    TypeOrmModule.forFeature([LoginEntities]),
  ],
      controllers:[AppController],
      providers:[LoginService],
})

export class AppModule{ }