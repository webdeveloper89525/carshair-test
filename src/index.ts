import { createExpressServer } from 'routing-controllers';
import "reflect-metadata";
import { AppDataSource } from './data-source';
import { CarController } from './controllers/CarController';

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
.then(async () => {
    console.log('database is connected!')

    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        controllers: [CarController], // we specify controllers we want to use
    })
    
    // run express application on port 8889
    app.listen(8889);
    console.log("Server started on port 8889!");
})
.catch((error) => console.log(error));
