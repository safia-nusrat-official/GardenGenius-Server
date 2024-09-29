/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { USER_ROLE, USER_STATUS } from './user.constants';

export type TUser = {
  _id?: string;
  name: string;
  role: keyof typeof USER_ROLE;
  email: string;
  password: string;
  status: keyof typeof USER_STATUS; // admin block-status
  passwordChangedAt?: Date;
  mobileNumber?: string;
  verified: boolean;
  profilePhoto?: string;
  following: Types.ObjectId[];
  followers: Types.ObjectId[];
  favouritePosts: Types.ObjectId[];
  upvotedPosts: Types.ObjectId[];
  posts: Types.ObjectId[];
  blockedUsers: Types.ObjectId[]; // 
  createdAt?: Date;
  updatedAt?: Date;
  isDeleted?: boolean;
};

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
