import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/worckspaces')
export class WorkspacesController {
    @Get()
    getWorkspaces(){

    }
    @Post()
    postWorkspaces(){

    }

    @Get(':name/members')
    getWorkspaceMembers(){

    }
    @Post(':name/members')
    postWorkspaceMembers(){

    }

    @Delete(':name/members/:id')
    deleteWorkspacesMembers(){

    }
    
}
