import sequelize from "../config/database";
import UserModel from "./UserModel";

// Initialze models
UserModel.initModel(sequelize);

// Set up associations
import "./associations";

export { sequelize };
