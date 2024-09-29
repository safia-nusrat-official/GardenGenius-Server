/* eslint-disable no-unused-vars */
import { Model, Types } from 'mongoose';
import { ACTIVITY_LEVELS, ACTIVITY_TYPES } from './activity.constants';

export type TActivity = {
  _id?: string;
  type: typeof ACTIVITY_TYPES;
  metadata: any;
  description: string;
  timestamp:string; // Date ISO string format
  success?: boolean; // e.g. post_creation fails

  // system-level => post_created, post_deleted, payment_verified
  // admin-level => admin_granted, admin_blocked, admin_deleted
  // user-level => signed_up, logged_in, user_deleted
  level?: typeof ACTIVITY_LEVELS; 
};

export interface IActivityModel<> extends Model<TActivity> {}
