import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { Connection, MySQLConnection, PostgreSQLConnection } from './connection/connection.js';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass: process.env.DATABASE == 'mysql' ? MySQLConnection : PostgreSQLConnection
    },
  ]
})
export class UserModule {}
