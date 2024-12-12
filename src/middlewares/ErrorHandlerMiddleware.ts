import { Request, Response } from "express";

export const ErrorHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response
) => {
  res.status(500).json({
    message: "An unexpected error occurred",
    error: process.env.NODE_ENV === "production" ? null : err.message,
  });
};
