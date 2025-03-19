import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/workspaces/:url/dms')
export class DmsController {
    @Get(':id/chats')
    getchat(@Query() query, @Param() param) {
        console.log(query.perPage, query.page)
        console.log(param.id, param.url)
    }

    @Post(':id/chats')
    postChat(@Body() body) {

    }

    @Post(':id/images')
    postImages(){

    }

    @Get(':id/unreads')
    getDmsUnreads(){
        
    }
}
