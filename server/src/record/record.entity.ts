import {Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import {Dish} from "../dish/dish.entity";

@Entity()
export class Record {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    eatTime: Date;

    @ManyToMany(() => Dish)
    @JoinTable()
    dishes: Dish[];
}
