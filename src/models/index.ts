import sequelize from "../config/database";
import JobModel from "./JobModel";
import JobsEnrollmentModel from "./JobsEnrollmentModel";
import RoleModel from "./RoleModel";
import UserModel from "./UserModel";
import UserRoleModel from "./UserRoleModel";

// Initialze models
UserModel.initModel(sequelize);
RoleModel.initModel(sequelize);
UserRoleModel.initModel(sequelize);
JobModel.initModel(sequelize);
JobsEnrollmentModel.initModel(sequelize);

// Set up associations
// import "./associations";

export { sequelize };
