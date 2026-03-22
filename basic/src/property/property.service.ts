import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from '../entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {
  constructor(
    @InjectRepository(Property) private propertyRepo: Repository<Property>,
  ) {}
  async findAll(): Promise<Property[]> {
    return await this.propertyRepo.find();
  }
}
