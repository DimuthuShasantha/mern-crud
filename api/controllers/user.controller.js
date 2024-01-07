import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const createUser = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    const existingUser = await User.findOne({ username });
    if (existingUser)
      return next(errorHandler(400, "Username already exists!"));
    const existingEmail = await User.findOne({ email });
    if (existingEmail) return next(errorHandler(400, "Email already exists!"));

    await User.create(req.body);
    res.status(200).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};
