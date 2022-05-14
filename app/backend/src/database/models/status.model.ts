import { UUID, UUIDV4, STRING, Model, NUMBER } from 'sequelize';
import db from '.';
import Block from './blocks.model';
import User from './users.model';

class Status extends Model {
  public id!: string;

  public title!: string;

  public priority!: number;

  public userId: string;

  public blockId: string;
}

Status.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: STRING(50),
      allowNull: false,
    },
    priority: {
      type: NUMBER,
      allowNull: false,
    },
    userId: {
      type: STRING(50),
      allowNull: true,
    },
    blockId: {
      type: STRING(50),
      allowNull: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'status',
    timestamps: false,
    tableName: 'status',
  },
);

User.hasMany(Status, { foreignKey: 'userId', as: 'createdBy'});
Status.belongsTo(User, { foreignKey: 'userId', as: 'createdBy'});

Block.hasMany(Status, { foreignKey: 'blockId', as: 'belongsTo'});
Status.belongsTo(Block, { foreignKey: 'blockId', as: 'belongsTo'});

export default Status;
