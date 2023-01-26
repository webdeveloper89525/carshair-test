import { createExpressServer } from 'routing-controllers';
import "reflect-metadata";
import { AppDataSource } from './data-source';
import path = require('path');
require('dotenv').config();

// to initialize initial connection with the database, register all entities
// and "synchronize" database schema, call "initialize()" method of a newly created database
// once in your application bootstrap
AppDataSource.initialize()
.then(async () => {
    console.log('database is connected!')

    // creates express app, registers all controller routes and returns you express app instance
    const app = createExpressServer({
        controllers: [path.join(__dirname, '/controllers/**/*.ts')],
        middlewares: [path.join(__dirname, '/middlewares/**/*.ts')],
        defaultErrorHandler: false
    })
    
    // run express application on port.
    const port = process.env.PORT || 8889;
    app.listen(port);
    console.log(`Server started on port ${port}!`);
})
.catch((error) => console.log(error));
