import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Middlaware {

    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    idWoocommerce!: number;

    @Column()
    idClover!: string;

}
