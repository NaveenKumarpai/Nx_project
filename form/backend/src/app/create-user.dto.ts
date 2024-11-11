import { IsEmail, IsString } from "class-validator";

export class createUserDto{
    @IsString()
    firstName:string;

    @IsString()
    lastName:string;

    @IsString()
    dateOfBirth:string;

    @IsString()
    gender:string;

    @IsEmail()
    email:string;

    @IsString()
    phoneNumber:string;

    @IsString()
    course:string;
    
}