import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.services';
import { TImageFile } from '../../interfaces/image.interface';
import AppError from '../../errors/AppError';

const createUser = catchAsync(async (req, res) => {
    if (!req.file) {
    throw new AppError(400, 'Please upload a profile photo!');
  }  
  const user = await UserServices.createUserIntoDB(req.body, req.file as TImageFile);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully',
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users Retrieved Successfully',
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Retrieved Successfully',
    data: user,
  });
});
const updateUserProfile = catchAsync(async (req, res) => {
  const user = await UserServices.updateUserProfileIntoDB(req.params.id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Profile Updated Successfully',
    data: user,
  });
});

export const UserControllers = {
  getSingleUser,
  createUser,
  getAllUsers,
  updateUserProfile
};
