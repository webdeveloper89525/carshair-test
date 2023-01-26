import { IsOptional } from "class-validator";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("int")
    licensePlate: number;

    @Column("int")
    registrationId: number;

    @IsOptional()
    @Column({nullable: true})
    registrationState?: string;

    @IsOptional()
    @Column({nullable: true})
    registrationExpireDate?: Date;

    @IsOptional()
    @Column({nullable: true})
    nameOnRegistration?: string;

    @Column()
    vin: string;

    @IsOptional()
    @Column({nullable: true})
    carValue?: number;

    @IsOptional()
    @Column({nullable: true})
    currentMileage?: number;

    @IsOptional()
    @Column({nullable: true, type: "text"})
    vehicleDescription?: string;

    @IsOptional()
    @Column({nullable: true})
    vehicleColor?: string;

    @IsOptional()
    @Column({nullable: true})
    model?: string;

    @IsOptional()
    @Column({nullable: true})
    make?: string;

    @IsOptional()
    @Column({nullable: true})
    year?: string;

}
