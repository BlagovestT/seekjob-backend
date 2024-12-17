import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface JobsEnrollmentsAttributes {
  id: number;
  job_id: number;
  user_id: number;
}

interface JobsEnrollmentCreationAttributes
  extends Optional<JobsEnrollmentsAttributes, "id"> {}

class JobsEnrollmentModel
  extends Model<JobsEnrollmentsAttributes, JobsEnrollmentCreationAttributes>
  implements JobsEnrollmentsAttributes
{
  public id!: number;

  public job_id!: number;

  public user_id!: number;

  public static initModel(sequelize: Sequelize): typeof JobsEnrollmentModel {
    JobsEnrollmentModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        job_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "job_enrollments",
        underscored: true,
      }
    );

    return JobsEnrollmentModel;
  }
}

export default JobsEnrollmentModel;
