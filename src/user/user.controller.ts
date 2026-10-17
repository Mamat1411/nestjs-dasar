import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('/users')
export class UserController {

    @Get('/sample')
    get(): string {
        return 'Hello NestJS';
    }

    @Get('/hello')
    sayHello(
        @Query('first_name') first_name: string,
        @Query('last_name') last_name: string
    ): string {
        return `Hello ${first_name} ${last_name}`;
    }

    @Post()
    post(): string {
        return 'POST';
    }

    @Get(`/:id`)
    getRequest(@Req() request: Request): string {
        return `GET ${request.params.id}`;
    }
}
