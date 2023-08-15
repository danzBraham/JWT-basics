import { CustomAPIError } from '../errors/index.js';
import { StatusCodes } from 'http-status-codes';

const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    res.status(err.statusCode).json({ msg: err.message });
  } else {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: 'Something went wrong try again later!' });
  }
};

export default errorHandler;
