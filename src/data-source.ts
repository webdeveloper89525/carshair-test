import { DataSource } from "typeorm";
require('dotenv').config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DB,
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    subscribers: [],
    migrations: [],
});
