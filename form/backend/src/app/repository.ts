// import { Injectable } from "@nestjs/common";
// import { Repository } from "typeorm";
// import { User } from "./user.entity";
// import { InjectRepository } from "@nestjs/typeorm";

// @Injectable()
// export class UserRepository extends Repository<User> 
// {
//     constructor(@InjectRepository(User) private userRepository:Repository<User> ) {
//         super(userRepository.target, userRepository.manager, userRepository.queryRunner);
//     }
// }