import { UUID, UUIDV4, STRING, Model } from 'sequelize';
import db from '.';
import User from './users.model';

class Block extends Model {
  public id!: string;

  public name!: string;

  public userId!: string;

  public thumbnail: string;
}

Block.init(
  {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: STRING(100),
      allowNull: false,
    },
    userId: {
      type: STRING(50),
      allowNull: false,
    },
    thumbnail: {
      type: STRING(255),
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'block',
    timestamps: true,
    tableName: 'blocks',
  },
);

User.hasMany(Block, { foreignKey: 'userId', as: 'createdBy'});
Block.belongsTo(User, { foreignKey: 'userId', as: 'createdBy'});

Block.belongsToMany(User, { through: 'Users_Blocks', as: 'participants', foreignKey: 'userId' });

export default Block;
