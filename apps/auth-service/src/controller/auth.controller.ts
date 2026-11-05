import { Request, Response, NextFunction } from "express";
import {
  checkOtpRestrictions,
  sendOtp,
  trackOtpRequests,
  validateRegistrationData,
  verifyOtp,
} from "../utils/auth.helper";
import { prisma } from "@packages/libs/prisma/db";
import { ValidationError } from "@packages/error-handler";
import bcrypt from "bcryptjs";

// Register a new user
export const userRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateRegistrationData(req.body, "user");

    const { name, email } = req.body;

    const existingUser = await prisma.users.findUnique({
      where: { email },
    });

    if (existingUser) {
      return next(new ValidationError("User already exists with this email."));
    }

    await checkOtpRestrictions(email, next);
    await trackOtpRequests(email, next);
    await sendOtp(name, email, "user-activation-mail");

    res.status(200).json({
      message: "OTP sent to email. Please verify your account",
    });
  } catch (error) {
    return next(error);
  }
};

// verify user with otp
export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { email, otp, password, name } = req.body;
    console.log(email, otp, password, name);
    if (!email || !otp || !password || !name) {
      return next(new ValidationError("All fields are required!"));
    }

    const existingUser = await prisma.users.findUnique({ where: { email } });

    if (existingUser) {
      return next(new ValidationError("User already exists with this email!"));
    }
    console.log("verify otp");
    await verifyOtp(email, otp, next);
    console.log("after verity otp");
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hello I am before PRISMA");
    await prisma.users.create({
      data: { name, email, password: hashedPassword, following: [] },
    });
    console.log("hello I am AFTER PRISMA");

    res.status(201).json({
      success: true,
      message: "User register successfully!",
    });
  } catch (error) {
    return next(error);
  }
};
