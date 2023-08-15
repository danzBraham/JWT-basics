import { BadRequestError } from '../errors/index.js';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError('Please provide username and password');
  }

  const id = nanoid();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.json({ msg: 'success', token });
};

export const dashboard = async (req, res) => {
  const luckyNumber = Math.round(Math.random() * 1000);
  res.status(200).json({
    msg: `Hello ${req.user.username}`,
    secret: `Here is your authorized data ${luckyNumber}`,
  });
};
