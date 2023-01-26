import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    licensePlate: number;

    @Column("int")
    registrationId: number;

    @Column()
    registrationState: string;

    @Column()
    registrationExpireDate: Date;

    @Column()
    nameOnRegistration: string;

    @Column()
    vin: string;

    @Column()
    carValue: number;

    @Column()
    currentMileage: number;

    @Column()
    vehicleDescription: string;

    @Column("text")
    vehicleColor: string;

}
