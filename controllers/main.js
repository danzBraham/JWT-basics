import { BadRequestError } from "../errors/index.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("Please provide username and password!");
  }
  const id = nanoid();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

export const dashboard = async (req, res) => {
  const { username } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello ${username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
