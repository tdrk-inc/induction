/* eslint-disable @typescript-eslint/no-var-requires */
const typeorm = require('typeorm');
const dotenv = require('dotenv');

/* eslint-enable */
dotenv.config();

module.exports.dataSource = new typeorm.DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
  logging: true,
  entities: [__dirname + '/../dist/**/entities/*.entity{.ts,.js}'],
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
});
