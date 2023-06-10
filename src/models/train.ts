import { Table, Model, Column, AllowNull } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';

@Table({
  tableName: 'train',
})
class Train extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
    id: number;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  trainName: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  fromCity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.STRING,
  })
  toCity: string;

  @AllowNull(false)
  @Column({
    type: DataTypes.DATE,
  })
    departureTime: Date;

  @AllowNull(false)
  @Column({
    type: DataTypes.DATE,
  })
    arrivalTime: Date;

  @AllowNull(false)
  @Column({
    type: DataTypes.BOOLEAN,
  })
    statusInTime: boolean;

  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    price: number;
  
  @AllowNull(false)
  @Column({
    type: DataTypes.INTEGER,
  })
    freePlaces: number;
}

export default Train;
