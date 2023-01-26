import { JsonController, Get, Post, Put, Delete, Body, Param, OnUndefined } from 'routing-controllers'
import { CarNotFoundError } from '../errors/CarNotFoundError';
import { CarService } from '../services/CarService';

@JsonController("/cars")
export class CarController {

    constructor(private carService: CarService) {}

    @Get()
    getAll() {
        return this.carService.getAll();
    }

    @Get("/:id")
    @OnUndefined(CarNotFoundError)
    getOne(@Param("id") id: number) {
        return this.carService.getOne(id);
    }

    @Post()
    post(@Body() user: any) {
        return this.carService.create(user);
    }

    @Put("/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return this.carService.update(id, user);
    }

    @Delete("/:id")
    remove(@Param("id") id: number) {
        return this.carService.delete(id);
    }
}
