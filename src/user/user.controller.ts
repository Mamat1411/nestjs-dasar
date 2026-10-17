import { Controller, Get, Param, Post, Query, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller('/users')
export class UserController {

    @Get('/sample-response')
    sampleResponse(@Res() response: Response) {
        response.status(200).send("Sample Response");
    }

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
    getRequest(@Param('id') id: string): string {
        return `GET ${id}`;
    }
}
