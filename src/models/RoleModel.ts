import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface RoleAttributes {
  id: string;
  role_name: string;
  created_at?: Date;
  updated_at?: Date;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, "id"> {}

class RoleModel
  extends Model<RoleAttributes, RoleCreationAttributes>
  implements RoleCreationAttributes
{
  public id!: string;

  public role_name!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): typeof RoleModel {
    RoleModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        role_name: {
          type: DataTypes.STRING,
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
        tableName: "roles",
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );

    return RoleModel;
  }
}

export default RoleModel;
