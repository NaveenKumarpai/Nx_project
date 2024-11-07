// // import { Injectable } from '@nestjs/common';
// // import { InjectRepository } from '@nestjs/typeorm';
// // import { User } from './user.entity';
// // import { Repository } from 'typeorm';
// // import { createUserDto } from './create-user.dto';
// // import { updateUserDto } from './update-user.dto';

// // @Injectable()
// // export class AppService {

// //   constructor(
// //     @InjectRepository(User)
// //     private userRepository: Repository<User>,
// //   ) {}

// //   async get(): Promise<User[]> {
// //     return this.userRepository.find();
// //   }

// //   async create(createUserDto: createUserDto): Promise<User> {
// //     const userObject = new User();
// //     userObject.firstName = createUserDto.firstName;
// //     userObject.lastName = createUserDto.lastName;
// //     userObject.dateOfBirth = createUserDto.dateOfBirth;
// //     userObject.email = createUserDto.email;
// //     userObject.gender = createUserDto.gender;
// //     userObject.phoneNumber = createUserDto.phoneNumber;
// //     userObject.course = createUserDto.course;
// //     return this.userRepository.save(userObject);
// //   }

// //   async update(userId:string ,updateUserDto:updateUserDto) :Promise<User>{
// //     const userAdd =new User();
// //     userAdd.firstName = updateUserDto.firstName;
// //     userAdd.lastName = updateUserDto.lastName;
// //     userAdd.dateOfBirth = updateUserDto.dateOfBirth;
// //     userAdd.email = updateUserDto.email;
// //     userAdd.gender = updateUserDto.gender;
// //     userAdd.phoneNumber = updateUserDto.phoneNumber;
// //     userAdd.course = updateUserDto.course;
// //     await this.userRepository.update(userId, userAdd);
// //     return this.userRepository.findOne(userId);
// //   }

// //    async update(req: updateUserDto): Promise<any> {
// //   const { id, ...updateData } = req;
// //    await this.userRepository.update(id, updateData);
// //     return this.userRepository.findOne();
// //    }

// //   // You can uncomment and implement other methods like findbyEmail, show, delete as needed.

// //   async findbyEmail(email: string): Promise<User | undefined> {
// //      return this.userRepository.findOne({ where: { email } });
// //    }

// //    async show(id: string): Promise<User | undefined> {
// //      return this.userRepository.findOne({ where: { id } });
// //    }

// //   // async delete(userId: number): Promise<void> {
// //   //   await this.userRepository.delete(userId);
// //   // }
// // }


// import { Injectable } from '@nestjs/common';
// import { Repository } from 'typeorm';
// import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './user.entity';
// import { createUserDto } from './create-user.dto';
// import { updateUserDto } from './update-user.dto';

// @Injectable()
// export class AppService {
//     constructor(
//         @InjectRepository(User)
//         private userRepository: Repository<User>,
//     ){}
//     get():Promise<User []>{
//         return this.userRepository.find();
//     }
    
//     async create(createUserDto: createUserDto): Promise<User> {
//         const userObject = new User();
//         userObject.firstName = createUserDto.firstName;
//         userObject.lastName = createUserDto.lastName;
//         userObject.dateOfBirth = createUserDto.dateOfBirth;
//         userObject.email = createUserDto.email;
//         userObject.gender = createUserDto.gender;
//         userObject.phoneNumber = createUserDto.phoneNumber;
//         userObject.course = createUserDto.course;
//         return this.userRepository.save(userObject);
//       }

//     update(
//         updateUserDto: updateUserDto,
//         userId:string){
//         return this.userRepository.update(userId, updateUserDto);
//     }
//     findbyEmail(email:string){
//         return this.userRepository.findOne({where:{email}})
//     }
//     show(id:string){
//         return this.userRepository.findOne({where: {id}});
//     }
//     delete(userId:number){
//         return this.userRepository.delete(userId);
//     }

// }



import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
