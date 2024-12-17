import JobModel from "./JobModel";
import JobsEnrollmentModel from "./JobsEnrollmentModel";
import RoleModel from "./RoleModel";
import UserModel from "./UserModel";
import UserRoleModel from "./UserRoleModel";

// User and Role: Many-to-Many relationship via UserRoleModel
UserModel.belongsToMany(RoleModel, {
  through: UserRoleModel,
  foreignKey: "user_id",
  as: "role",
});

// Role and User: Many-to-Many relationship via UserRoleModel
RoleModel.belongsToMany(UserModel, {
  through: UserRoleModel,
  foreignKey: "role_id",
  as: "users",
});

// User and Job: One-to-Many relationship
UserModel.hasMany(JobModel, {
  foreignKey: "user_id",
  as: "jobs",
});

// Job and User: One-to-Many relationship
JobModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});

// Job and JobsEnrollment: One-to-Many relationship
JobModel.hasMany(JobsEnrollmentModel, {
  foreignKey: "job_id",
  as: "enrollments",
});

// JobsEnrollment and Job: One-to-Many relationship
JobsEnrollmentModel.belongsTo(JobModel, {
  foreignKey: "job_id",
  as: "job",
});

// User and JobsEnrollment: One-to-Many relationship
UserModel.hasMany(JobsEnrollmentModel, {
  foreignKey: "user_id",
  as: "enrollments",
});

// JobsEnrollment and User: One-to-Many relationship
JobsEnrollmentModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});
