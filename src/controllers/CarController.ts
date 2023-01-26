import { JsonController, Get, Post, Put, Delete, Body, Param, OnUndefined, BadRequestError } from 'routing-controllers'
import { Car } from '../entities/Car';
import { CarNotFoundError } from '../errors/CarNotFoundError';
import { CarService } from '../services/CarService';

@JsonController("/cars")
export class CarController {

    constructor() {}

    private carService = CarService.getInstance();

    @Get()
    public getAll(): Promise<Car[]> {
        return this.carService.getAll();
    }

    @Get("/:id")
    @OnUndefined(CarNotFoundError)
    public getOne(@Param("id") id: number): Promise<Car | undefined> {
        return this.carService.getOne(id);
    }

    @Post()
    public post(@Body({required: true}) body: any): Promise<Car> {
        const car = new Car();

        car.licensePlate = body.licensePlate;
        car.registrationId = body.registrationId;
        car.registrationState = body?.registrationState;
        car.registrationExpireDate = body?.registrationExpireDate;
        car.nameOnRegistration = body?.nameOnRegistration;
        car.vin = body.vin;
        car.carValue = body?.carValue;
        car.currentMileage = body?.currentMileage;
        car.vehicleDescription = body?.vehicleDescription;
        car.vehicleColor = body?.vehicleColor;
        
        return this.carService.create(car);
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body({required: true}) body: any): Promise<Car> {
        const car = new Car();

        car.licensePlate = body.licensePlate;
        car.registrationId = body.registrationId;
        car.registrationState = body?.registrationState;
        car.registrationExpireDate = body?.registrationExpireDate;
        car.nameOnRegistration = body?.nameOnRegistration;
        car.vin = body.vin;
        car.carValue = body?.carValue;
        car.currentMileage = body?.currentMileage;
        car.vehicleDescription = body?.vehicleDescription;
        car.vehicleColor = body?.vehicleColor;

        return this.carService.update(id, car);
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
        return this.carService.delete(id);
    }
}
