import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { Property } from './src/entities/property.entity';

export const dbConfig: PostgresConnectionOptions = {
  url: '',
  host: '',
  port: 0,
  username: '',
  password: '',
  database: '',
  type: 'postgres',
  entities: [Property], // [__dirname+'/**/*.entity{.ts,.js}']
};
