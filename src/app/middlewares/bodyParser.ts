import AppError from '../errors/AppError';
import { catchAsync } from '../utils/catchAsync';

export const parseBody = catchAsync(async (req, res, next) => {
  console.log(req.body)
  if (!req.body.data) {
    throw new AppError(400, 'Please provide data in the body under data key');
  }
  req.body = JSON.parse(req.body.data);
  console.log('body data in parseBody', req.body);
  next();
});
