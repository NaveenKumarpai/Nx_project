import { IsEmail, IsString } from "class-validator";

export class updateUserDto{

    @IsString()
    id: string;
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