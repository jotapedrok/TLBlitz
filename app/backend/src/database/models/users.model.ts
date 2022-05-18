import { DATE, UUID, BOOLEAN, UUIDV4, STRING, Model } from 'sequelize';
import db from '.';
import Block from './blocks.model';

class User extends Model {
  public id!: string;

  public username!: string;

  public role!: string;

  public email!: string;

  public password: string;

  public deleted: boolean;

  public deletedAt: Date;
}

User.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    username: {
      type: STRING(255),
      allowNull: false,
    },
    role: {
      type: STRING(255),
      allowNull: false,
    },
    email: {
      type: STRING(255),
      allowNull: false,
    },
    password: {
      type: STRING(255),
      allowNull: false,
    },
    deleted: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    deletedAt: {
      type: DATE,
      allowNull: true,
    }
  },
  {
    underscored: false,
    sequelize: db,
    modelName: 'User',
    timestamps: true,
    tableName: 'Users',
  },
);

User.belongsToMany(Block, { through: 'Users_Blocks', as: 'blocks', foreignKey: 'user_id' });

User.hasMany(Block, { foreignKey: 'createdy_by', as: 'created_blocks' });
Block.belongsTo(User, { foreignKey: 'created_by', as: 'createdBy' });


export default User;
