import { Model, Sequelize } from 'sequelize';
export declare class Book extends Model {
    id: number;
    title: string;
    author: string;
    year_of_publication: number;
}
export declare function initializeBookModel(sequelize: Sequelize): void;
