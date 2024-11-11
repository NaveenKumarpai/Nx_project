import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('login')
export class LoginEntities{
    @PrimaryGeneratedColumn({
        name:'id'
    })
    id:number

    @Column('varchar',{
        name:'login'
    })
    login:'string'

    @Column('varchar',{
        name:'password',
        nullable:false
    })
    password:'string'
}