import { Injectable } from '@nestjs/common';

@Injectable()
export class Connection {
    getName(): string|null {
        return null;
    }
}

@Injectable()
export class MySQLConnection extends Connection{
    getName(): string {
        return `MySQL Connection`;
    }
}

@Injectable()
export class PostgreSQLConnection extends Connection{
    getName(): string {
        return `PostgreSQL Connection`;
    }
}
