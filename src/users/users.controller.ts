import { Body, Controller, Get, Post, Req, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOkResponse, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';
import { User } from 'src/common/decorator/user.decorator';
import { UndefinedToNullInterceptor } from 'src/common/interceptor/undefinedToNull.interceptor';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@UseInterceptors(UndefinedToNullInterceptor) // 인터셉터 연결
@Controller('api/users')
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

    @ApiOperation({summary:'회원가입'})
    @Post()
    async Join(@Body() body: JoinRequestDto) {
        await this.userService.join(body.email, body.nickname, body.password)
    }


    @ApiResponse({
        status: 200,
        description : '성공',
        type : UserDto,
    })
    @ApiOperation({summary:'로그인'})
    @UseGuards(LocalAuthGuard)
    @Post('login')
    logIn(@User() user) {
        return user;
    }

    @Post('logout')
    logOut(@Req() req, @Res() res) {
        req.logOut();
        res.clearCookie('connect.sid', { httpOnly: true })
        res.send('ok')

    }
}
