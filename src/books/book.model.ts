import { Model, DataTypes, Sequelize } from 'sequelize';

export class Book extends Model {
  public id!: number;
  public title!: string;
  public author!: string;
  public year_of_publication!: number;
}

export function initializeBookModel(sequelize: Sequelize): void {
  Book.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      year_of_publication: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'books',
      timestamps:true,
      underscored:true
    }
  );
}
