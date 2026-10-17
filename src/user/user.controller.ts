import { Controller, Get, Header, HttpCode , type HttpRedirectResponse, Inject, Param, Post, Query, Redirect, Req, Res } from '@nestjs/common';
import type { Response, Request } from 'express';
import { UserService } from './user.service.js';

@Controller('/users')
export class UserController {
    // constructor(private userService: UserService){} //constructor-based dependency injection

    @Inject()
    private userService: UserService; //property-based dependency injection

    @Get('/sample-response')
    @Header("Content-Type", "application/json")
    @HttpCode(200)
    sampleResponse() : Record<string, string> {
        return {
            data: "Hello JSON"
        }
    }

    @Get('/redirect')
    @Redirect()
    redirect(): HttpRedirectResponse{
        return {
            url: "/api/users/sample-response",
            statusCode: 301
        };
    }

    @Get('/sample')
    get(): string {
        return 'Hello NestJS';
    }

    @Get('/hello')
    async sayHello(
        @Query('first_name') first_name: string,
        @Query('last_name') last_name: string
    ): Promise<string> {
        return this.userService.sayHello(first_name, last_name);
    }

    @Get('/set-cookie')
    setCookie(@Query('name') name: string, @Res() response: Response){
        response.cookie('name', name);
        response.status(200).json({
            data: `Success Set Cookie`
        })
    }

    @Get('/get-cookie')
    getCookie(@Req() request: Request): Record<string, string> {
        return {
            data: request.cookies['name']
        }
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
