import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {Category} from "../category/category.entity";

@Entity()
export class Dish {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: false })
    easy: boolean;

    @Column()
    lastEatTime: Date;

    @ManyToOne(() => Category, category => category.dishes)
    category: Category;
}
