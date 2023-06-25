import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { CarsResolver } from './cars/cars.resolver';

@Module({
  imports: [CarsModule],
  exports: [CarsModule],
})
export class ComponentsModule {}
