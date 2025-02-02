import express, { Request, Response } from "express";
import { ErrorHandlerMiddleware } from "./middlewares/ErrorHandlerMiddleware";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import routes from "./routes/routes";
import { sequelize } from "./models";

dotenv.config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || "development";

const app = express();

// Middleware setup
app.use(express.json({ limit: "50kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Database connection and synchronization
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await sequelize.sync({ alter: NODE_ENV === "development" });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
})();

// Route handling
app.use("/api", routes);

// Not Found Middleware
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: "404: Route Not Found" });
});

// Error handling middleware
app.use(ErrorHandlerMiddleware);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode.`);
});

export default app;
