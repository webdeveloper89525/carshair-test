import { AppDataSource } from "../data-source";
import { Car } from "../entities/Car";
import { decodeVIN } from "../utils/decodeVIN";


export class CarService {
    constructor() {}

    /**
     * Make the singleton design pattern
     */
    private static _instance: CarService;
    private carRepository = AppDataSource.getRepository(Car);

    static getInstance() {
        if (this._instance) {
            return this._instance;
        }

        this._instance = new CarService();
        return this._instance;
    }

    public async getAll() {
        return await this.carRepository.find();
    }

    public async getOne(id: number) {
        return await this.carRepository.findOneBy({id});
    }

    public async create(car: Car) {
        if (car.vin) {
            const data = await decodeVIN(car.vin) as any;
            car.model = data?.model;
            car.year = data?.year;
            car.make = data?.make;
        }
        return await this.carRepository.save(car);
    }

    public async update(id: number, car: Car) {
        car.id = id;
        return await this.carRepository.save(car);
    }

    public async delete(id: number) {
        return await this.carRepository.delete(id);
    }
}
