import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    firstName:string;

    @Column()
    lastName:string;

    @Column()
    dateOfBirth:string;

    @Column()
    gender:string;

    @Column()
    email:string;

    @Column()
    phoneNumber:string;

    @Column()
    course:string;
   
      
}