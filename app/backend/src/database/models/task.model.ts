import { UUID, UUIDV4, STRING, Model, TEXT } from 'sequelize';
import db from '.';
import Block from './blocks.model';
import Status from './status.model';
import User from './users.model';

class Task extends Model {
  public id!: string;

  public title!: string;

  public description: string;

  public content: string;

  public createdBy!: string;

  public block: string;

  public status: string;
}

Task.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: STRING(100),
      allowNull: false,
    },
    description: {
      type: STRING(255),
      allowNull: true,
    },
    content: {
      type: TEXT,
      allowNull: true,
    },
    userId: {
      type: UUID,
      allowNull: false,
    },
    blockId: {
      type: UUID,
      allowNull: false,
    },
    statusId: {
      type: UUID,
      allowNull: true,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'task',
    timestamps: true,
    tableName: 'tasks',
  },
);

User.hasMany(Task, { foreignKey: 'userId', as: 'creator' });
Block.hasMany(Task, { foreignKey: 'blockId', as: 'block' });
Status.hasMany(Task, { foreignKey: 'statusId', as: 'status' });

Task.belongsTo(User, { foreignKey: 'userId', as: 'creator' });
Task.belongsTo(Block, { foreignKey: 'blockId', as: 'block' });
Task.belongsTo(Status, { foreignKey: 'statusId', as: 'status' });

export default Task;
