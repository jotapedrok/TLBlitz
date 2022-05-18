import { UUID, BOOLEAN, STRING, Model } from 'sequelize';
import db from '.';
import Block from './blocks.model';
import User from './users.model';

class UserBlocks extends Model {
  public user_id!: string;

  public block_id!: string;

  public acess!: string;

  public removed!: boolean;
}

UserBlocks.init(
  {
    userId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    blockId: {
      type: UUID,
      primaryKey: true,
      allowNull: false,
    },
    access: {
      type: STRING(255),
      allowNull: false,
    },
    removed: {
      type: BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'UsersBlocks',
    timestamps: false,
    tableName: 'Users_Blocks',
  },
);

Block.belongsToMany(User, { through: 'Users_Blocks', as: 'participants', foreignKey: 'blockId' });
User.belongsToMany(Block, { through: 'Users_Blocks', as: 'blocks', foreignKey: 'userId' });

export default UserBlocks;