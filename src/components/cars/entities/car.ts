import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  @Field() // this transform database to graphql database
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  dailyPrice: number;

  @Column()
  @Field()
  monthlyPrice: number;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  gas: string;

  @Column()
  @Field()
  gearType: string;

  @Column()
  @Field()
  thumbnailUrl: string;
}
