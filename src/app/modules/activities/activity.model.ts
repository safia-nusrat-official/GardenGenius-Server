/* eslint-disable no-useless-escape */
import { Schema, model } from 'mongoose';
import { IActivityModel, TActivity } from './activity.interface';
import { ACTIVITY_LEVELS, ACTIVITY_TYPES } from './activity.constants';

const activitySchema = new Schema<TActivity, IActivityModel>(
  {
    description: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ACTIVITY_TYPES,
      required: true,
    },
    metadata: {
      type: {},
      required: true,
    },
    success: {
      type: Boolean,
    },
    level: {
      type: String,
      enum: ACTIVITY_LEVELS,
    },
  },
  {
    timestamps: true,
    virtuals: true,
  }
);

export const Activity = model<TActivity, IActivityModel>(
  'activity',
  activitySchema
);
