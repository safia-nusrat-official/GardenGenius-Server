import { QueryBuilder } from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TImageFile } from '../../interfaces/image.interface';
import { deleteImageFromCloudinary } from '../../utils/deleteImage';
import { UserSearchableFields } from './user.constants';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser, profileImage: TImageFile) => {
  payload.profilePhoto = profileImage.path;
  const userAlreadyExists = await User.findOne({ email: payload.email });
  if (userAlreadyExists) {
    await deleteImageFromCloudinary(profileImage)
    throw new AppError(403, 'User already exists!');
  }
  const user = await User.create(payload);
  return user;
};

const updateUserProfileIntoDB = async (id: string, payload: TUser) => {
  return null;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = new QueryBuilder(User.find(), query)
    .fields()
    .paginate()
    .sort()
    .filter()
    .search(UserSearchableFields);

  const result = await users.modelQuery;

  return result;
};

const getSingleUserFromDB = async (id: string) => {
  const user = await User.findById(id);

  return user;
};
const deleteUserFromDB = async (id: string) => {
  const user = await User.findByIdAndDelete(id);

  return user;
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserProfileIntoDB,
  deleteUserFromDB,
};
