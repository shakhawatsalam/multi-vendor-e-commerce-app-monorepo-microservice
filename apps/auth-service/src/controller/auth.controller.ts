import { Request, Response, NextFunction } from "express";
import { validateRegistrationData } from "../utils/auth.helper";
import { db } from "../../../../packages/libs/prisma/db";
import { ValidationError } from "../../../../packages/error-handler";
// Register a new user
export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validateRegistrationData(req.body, "user");

  const { name, email } = req.body;

  const existingUser = await db.orm.users.where({ email }).first();

  if (existingUser) {
    return next(new ValidationError("User already exists with this email."));
  }
};
