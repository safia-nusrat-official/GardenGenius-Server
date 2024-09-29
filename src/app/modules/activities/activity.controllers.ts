import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ActivityServices } from './activity.services';

const createActivity = catchAsync(async (req, res) => {
  const activity = await ActivityServices.createActivityIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Activity Created Successfully',
    data: activity,
  });
});

const getAllActivities = catchAsync(async (req, res) => {
  const activitys = await ActivityServices.getAllActivitiesFromDB(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Activities Retrieved Successfully',
    data: activitys,
  });
});


const deleteActivity = catchAsync(async (req, res) => {
  const activity = await ActivityServices.deleteActivityFromDB(req.params.id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Activity Deleted Successfully',
    data: activity,
  });
});

export const ActivityControllers = {
  createActivity,
  getAllActivities,
  deleteActivity,
};
