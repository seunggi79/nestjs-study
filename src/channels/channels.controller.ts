import { Controller, Get, Post } from '@nestjs/common';

@Controller('api/workspaces/:url/channels')
export class ChannelsController {

    @Get()
    getChannels(){

    }
    @Post()
    postChannels(){

    }

    @Get(':name')
    getChannel(){

    }

    @Get(':name/chats')
    getChats(){

    }
    @Post(':name/chats')
    postChats(){

    }

    @Get(':name/members')
    getChannelMembers(){

    }
    @Post(':name/members')
    postChannelMembers(){

    }

    @Get(':name/unreads')
    getUnreads(){

    }

    

    @Post(':name/images')
    postImages(){

    }


}
