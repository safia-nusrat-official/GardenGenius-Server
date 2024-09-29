import { JwtPayload } from 'jsonwebtoken';
import { TChangePasswordData, TLoginData } from './auth.interface';
import { TUser } from '../users/user.interface';

const loginUser = async (payload: TLoginData) => {
  return {
    accessToken: null,
    refreshToken: null,
  };
};
const signupUser = async (payload: TUser) => {
  return {
    accessToken: null,
    refreshToken: null,
  };
};
const changePassword = async (
  userData: JwtPayload,
  passwordData: TChangePasswordData
) => {};
const getRefreshToken = async (token: string) => {};

export const AuthServices = {
  loginUser,
  signupUser,
  changePassword,
  getRefreshToken,
};
