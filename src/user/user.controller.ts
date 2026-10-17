import { Controller, Get, Header, HttpCode , type HttpRedirectResponse, Param, Post, Query, Redirect } from '@nestjs/common';

@Controller('/users')
export class UserController {

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
