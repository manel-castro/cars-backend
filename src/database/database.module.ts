import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot()],
  exports: [],
})
export class DatabaseModule {
  constructor(connection: Connection);
}