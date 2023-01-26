import { AppDataSource } from "../data-source";
import { Car } from "../entities/Car";

export class CarService {
    constructor() {}
    
    private carRepository = AppDataSource.getRepository(Car);

    async getAll() {
        return await this.carRepository.find();
    }

    async getOne(id: number) {
        return await this.carRepository.findOneBy({id});
    }

    async create(car: Car) {
        return await this.carRepository.save(car);
    }

    async update(id: number, car: Car) {
        return await this.carRepository.update(id, car);
    }

    async delete(id: number) {
        return await this.carRepository.delete(id);
    }
}
