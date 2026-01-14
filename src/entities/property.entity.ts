import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PropertyFeature } from './propertyFeature.entity';

@Entity()
export class Property {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ default: 0 })
  age: number;
  @OneToOne(
    () => PropertyFeature,
    (propertyFeature) => propertyFeature.property,
    { cascade: true }, // {cascade: ["update"]}
  )
  propertyFeature: PropertyFeature;
}
