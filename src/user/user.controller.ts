import { Controller, Get, Post } from '@nestjs/common';

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
}
