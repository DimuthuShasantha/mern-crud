import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
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
      .json({ message: "You've signed up successfully!" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const validUser = await User.findOne({ username });
    if (!validUser)
      return next(errorHandler(404, "Invalid Credentials! Please try again"));

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword)
      return next(errorHandler(404, "Invalid Credentials! Please try again"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res.cookie("ACCESS_TOKEN", token, { httpOnly: true }).status(200).json({ rest, message: "Welcome... You've signed in successfully!"});
  } catch (error) {
    next(error);
  }
};
