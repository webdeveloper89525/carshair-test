import { JsonController, Get, Post, Put, Delete, Body, Param } from 'routing-controllers'
import { CarService } from '../services/CarService';

@JsonController()
export class CarController {

    constructor(private carService: CarService) {}

    @Get("/cars")
    getAll() {
        return this.carService.getAll();
    }

    @Get("/cars/:id")
    getOne(@Param("id") id: number) {
        return this.carService.getOne(id);
    }

    @Post("/cars")
    post(@Body() user: any) {
        return this.carService.create(user);
    }

    @Put("/cars/:id")
    put(@Param("id") id: number, @Body() user: any) {
        return this.carService.update(id, user);
    }

    @Delete("/cars/:id")
    remove(@Param("id") id: number) {
        return this.carService.delete(id);
    }
}
