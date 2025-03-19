import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private userService: UsersService){

    } // usersService 연결
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @Get()
    getUsersId(){
        
    }

    @Post()
    postUsers(@Body() body: JoinRequestDto) {
        this.userService.postUsers(body.email, body.nickname, body.password)
    }

    @Post('login')
    logIn() {

    }

    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true })
        res.send('ok')

    }
}
