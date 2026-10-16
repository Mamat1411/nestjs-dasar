import { Controller, Get, Post, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller('/users')
export class UserController {

    @Get('/sample')
    get(): string {
        return 'Hello NestJS';
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
