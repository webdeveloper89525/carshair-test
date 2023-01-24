import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root@1234",
    database: "car-test",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
    subscribers: [],
    migrations: [],
});
