import { hashSync } from "bcrypt";
import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface UserAttributes {
  id: string;
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class UserModel
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: string;

  public first_name!: string;

  public last_name!: string;

  public password!: string;

  public email!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): typeof UserModel {
    UserModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        first_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
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
        tableName: "users",
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        defaultScope: {
          attributes: { exclude: ["password", "created_at", "updated_at"] },
        },
        hooks: {
          beforeCreate: (user) => {
            user.password = hashSync(user.password, 10);
          },
        },
      }
    );

    return UserModel;
  }
}

export default UserModel;
