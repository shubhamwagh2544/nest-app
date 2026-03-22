import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsString } from 'class-validator';
import { Property } from './property.entity';

@Entity()
export class PropertyFeature {
  @PrimaryGeneratedColumn()
  id: number;
  @IsString()
  name: string;
  @OneToOne(() => Property, (property) => property.propertyFeature)
  @JoinColumn()
  property: Property;
}
