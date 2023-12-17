import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const existUsername = await User.findOne({ username });
    if (existUsername)
      return next(errorHandler(400, "Username already exist!"));

    const existEmail = await User.findOne({ email });
    if (existEmail) return next(errorHandler(400, "Email already exist!"));

    const hashedPassowrd = bcryptjs.hashSync(password, 10);

    const newUser = await User({
      username,
      email,
      password: hashedPassowrd,
    });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Welcome... You've signed up successfully!" });
  } catch (error) {
    next(error);
  }
};
