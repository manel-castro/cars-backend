import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Car } from './entities/car';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}
}
