import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('/users')
export class UserController {

    @Get('/sample')
    get(): string {
        return 'Hello NestJS';
    }

    @Get('/hello')
    sayHello(@Query('name') name: string): string {
        return `Hello ${name || 'Guest'}`;
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
