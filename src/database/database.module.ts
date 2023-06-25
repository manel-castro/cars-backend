import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

// eslint-disable-next-line
const ormconfig = require('../../ormconfig.js');

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig)],
  exports: [TypeOrmModule],
})
export class DatabaseModule {
  constructor(connection: Connection) {
    if (connection.isConnected) console.log('connected to DB');
  }
}
