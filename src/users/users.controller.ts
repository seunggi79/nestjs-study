import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private userService: UsersService){

    } // usersService 연결결
    @Get()
    getUsers(@Req() req) {
        return req.user;
    }

    @Post()
    postUsers(@Body() data: JoinRequestDto) {
        this.userService.postUsers(data.email, data.nickname, data.password)
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
