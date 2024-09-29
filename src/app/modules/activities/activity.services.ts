import { QueryBuilder } from '../../builder/QueryBuilder';
import { TActivity } from './activity.interface';
import { Activity } from './activity.model';

const createActivityIntoDB = async (payload: TActivity) => {
  const activity = await Activity.create(payload);

  return activity;
};

const getAllActivitiesFromDB = async (
  query: Record<string, unknown>
) => {
  const activities = new QueryBuilder(Activity.find(), query)
    .sort()
    .filter();

  const result = await activities.modelQuery;
  return result;
};

const deleteActivityFromDB = async (id: string) => {
  const activity = await Activity.findByIdAndDelete(id);
  return activity;
};

export const ActivityServices = {
  createActivityIntoDB,
  deleteActivityFromDB,
  getAllActivitiesFromDB,
};
