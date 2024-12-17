import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface UserRoleAttributes {
  id: number;
  user_id: number;
  role_id: number;
  created_at?: Date;
  updated_at?: Date;
}

interface UserRoleCreationAttributes
  extends Optional<UserRoleAttributes, "id"> {}

class UserRoleModel
  extends Model<UserRoleAttributes, UserRoleCreationAttributes>
  implements UserRoleCreationAttributes
{
  public id!: number;

  public user_id!: number;

  public role_id!: number;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): typeof UserRoleModel {
    UserRoleModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        role_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        tableName: "user_roles",
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );

    return UserRoleModel;
  }
}

export default UserRoleModel;
