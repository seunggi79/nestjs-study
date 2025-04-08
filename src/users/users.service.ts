import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    async join(email: string, nickname: string, password: string){
        if(!email){
            throw Error('이메일이 없네요')
        }
        if(!nickname){
            throw Error('이메일이 없네요')
        }
        if(!password){
            throw Error('이메일이 없네요')
        }
        const user = await this.usersRepository.findOne({where: {email}});
        if(user){
            throw new Error('이미 존재하는 사용자입니다.');
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        await this.usersRepository.save({
            email,
            nickname,
            password: hashedPassword,
        })
    }
}
