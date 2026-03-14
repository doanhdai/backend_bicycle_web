import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.get('DB_HOST') || '127.0.0.1',
  port: configService.get('DB_PORT') || 3306,
  username: configService.get('DB_USER') || 'root',
  password: configService.get('DB_PASS') || '',
  database: configService.get('DB_NAME') || 'bicycle_web',
  entities: ['src/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*{.ts,.js}'],
  synchronize: false,
  logging: true,
});