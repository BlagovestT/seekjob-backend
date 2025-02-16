import rateLimit from "express-rate-limit";
import { Express } from "express";

// Create a limiter for general API endpoints
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Don't return the `X-RateLimit-*` headers
});

// Create a stricter limiter for job creation
const createJobLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 job creations per hour
  message:
    "Too many job posts created from this IP, please try again after an hour",
  standardHeaders: true,
  legacyHeaders: false,
});

export const applyRateLimiting = (app: Express) => {
  // Apply the general rate limiter to all routes
  app.use("/api", apiLimiter);

  // Apply the stricter rate limiter specifically to job creation
  app.use("/api/jobs", createJobLimiter);
};
