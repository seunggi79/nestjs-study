import { Body, Controller, Get, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';
import { User } from 'src/common/decorator/user.decorator';
import { UndefinedToNullInterceptor } from 'src/common/interceptor/undefinedToNull.interceptor';

@UseInterceptors(UndefinedToNullInterceptor) // 인터셉터 연결
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {

    } // usersService 연결

    @ApiResponse({
        type: UserDto
    })

    @Get()
    getUsers(@User() user) {
        return user;
    }

    @Get()
    getUsersId() {

    }

    @Post()
    postUsers(@Body() body: JoinRequestDto) {
        this.userService.postUsers(body.email, body.nickname, body.password)
    }

    @ApiOkResponse({
        type: UserDto
    })
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
