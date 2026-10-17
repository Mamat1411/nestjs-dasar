import { Module } from '@nestjs/common';
import { UserController } from './user.controller.js';
import { UserService } from './user.service.js';
import { Connection, MySQLConnection, PostgreSQLConnection } from './connection/connection.js';
import { mailService, MailService } from './mail/mail.service.js';
import { createUserRepository, UserRepository, } from './repository/user.repository.js';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass: process.env.DATABASE == 'mysql' ? MySQLConnection : PostgreSQLConnection
    },
    {
      provide: MailService,
      useValue: mailService
    },
    {
      provide: `EmailService`,
      useExisting: MailService
    },
    {
      provide: UserRepository,
      useFactory: createUserRepository,
      inject: [Connection]
    }
  ]
})
export class UserModule {}
