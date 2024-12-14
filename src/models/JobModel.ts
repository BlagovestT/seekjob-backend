import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface JobAttributes {
  id: string;
  user_id: string;
  title: string;
  description: string;
  location: string;
  emploument_type: string;
  min_experience: string;
  keywords: string;
  created_at?: Date;
  updated_at?: Date;
}

interface JobCreationAttributes extends Optional<JobAttributes, "id"> {}

class JobModel
  extends Model<JobAttributes, JobCreationAttributes>
  implements JobAttributes
{
  public id!: string;

  public user_id!: string;

  public title!: string;

  public description!: string;

  public location!: string;

  public emploument_type!: string;

  public min_experience!: string;

  public keywords!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public static initModel(sequelize: Sequelize): typeof JobModel {
    JobModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        location: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        emploument_type: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        min_experience: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        keywords: {
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
        tableName: "jobs",
        timestamps: true,
        underscored: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );

    return JobModel;
  }
}

export default JobModel;
