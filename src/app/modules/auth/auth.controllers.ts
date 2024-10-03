import httpStatus from 'http-status';
import config from '../../config';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.services';
import { catchAsync } from '../../utils/catchAsync';
import AppError from '../../errors/AppError';

const signupUser = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(400, 'Please upload a profile photo!');
  } 
  const result = await AuthServices.signupUser(req.body, req.file);
  const { refreshToken, accessToken, data } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User registered in successfully!',
    data: {
      data,
      accessToken,
      refreshToken,
    },
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User logged in successfully!',
    data: {
      accessToken,
      refreshToken,
    },
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;

  const result = await AuthServices.changePassword(req.user, passwordData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Password updated successfully!',
    data: result,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await AuthServices.getRefreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Access token retrieved successfully!',
    data: result,
  });
});

export const AuthControllers = {
    signupUser,
  loginUser,
  changePassword,
  refreshToken,
};
