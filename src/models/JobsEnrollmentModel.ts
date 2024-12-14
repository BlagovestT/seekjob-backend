import { DataTypes, Model, Optional, Sequelize } from "sequelize";

interface JobsEnrollmentsAttributes {
  id: string;
  job_id: string;
  user_id: string;
}

interface JobsEnrollmentCreationAttributes
  extends Optional<JobsEnrollmentsAttributes, "id"> {}

class JobsEnrollmentModel
  extends Model<JobsEnrollmentsAttributes, JobsEnrollmentCreationAttributes>
  implements JobsEnrollmentsAttributes
{
  public id!: string;

  public job_id!: string;

  public user_id!: string;

  public static initModel(sequelize: Sequelize): typeof JobsEnrollmentModel {
    JobsEnrollmentModel.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        job_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        user_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "jobs_enrollments",
        underscored: true,
      }
    );

    return JobsEnrollmentModel;
  }
}

export default JobsEnrollmentModel;
