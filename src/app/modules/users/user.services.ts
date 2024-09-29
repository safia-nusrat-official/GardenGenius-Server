import { QueryBuilder } from '../../builder/QueryBuilder';
import { UserSearchableFields } from './user.constants';
import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (payload: TUser) => {
  const user = await User.create(payload);

  return user;
};

const updateUserProfileIntoDB = async (id:string, payload: TUser) => {
  return null
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
  deleteUserFromDB
};
