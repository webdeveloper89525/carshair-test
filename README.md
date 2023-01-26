# carshair-test

## How to run the project?
## Technical Resources
- MySQL
- TypeORM
- Typescript
- Node.js
- Express
- routing-controllers

## How to run the project?
1. Install mysql on the local machine.
    There can be 2 ways to install mysql on local machine.
    - Use mysql installer. Please refer this. https://dev.mysql.com/doc/mysql-installation-excerpt/8.0/en/
    - Use docker compose. Please run the below command
        ```
        docker-compose up
        ```
2. Create the database with the name which is in the .env file.
3. Install node modules by using `yarn`
4. Run backend by using `yarn dev`

## RESTful API
- Get all list
GET: `http://localhost:8889/cars`
- Get car item by id
GET: `http://localhost:8889/cars/:id`
- Create the new car
POST: `http://localhost:8889/cars`
request body:
```
{
    "licensePlate": 1234567,
    "registrationId": 4567,
    "registrationState": "CA",
    "registrationExpireDate": "01/24/2026",
    "nameOnRegistration": "Volvo",
    "vin": "WBSEG9320RCD00034",
    "carValue": 123123,
    "currentMileage": 23322,
    "vehicleDescription": "This is the description for the vehicle",
    "vehicleColor": "black"
}
```
- Update the car by id
PUT: `http://localhost:8889/cars/:id`
request body:
```
{
    "licensePlate": 1234567,
    "registrationId": 4567,
    "registrationState": "CA",
    "registrationExpireDate": "01/24/2026",
    "nameOnRegistration": "Volvo",
    "vin": "WBSEG9320RCD00034",
    "carValue": 123123,
    "currentMileage": 23322,
    "vehicleDescription": "This is the description for the vehicle",
    "vehicleColor": "black"
}
```
- Delete the car by id
DELETE: `http://localhost:8889/cars/:id`
