export const ACTIVITY_TYPES = [
  'logged_in',
  'signed_up',
  'user_deleted',

  'post_created',
  'post_deleted',

  'admin_granted',
  'admin_blocked',
  'admin_deleted',

  'payment_verified',
] as const;

export const ACTIVITY_LEVELS = [
  'system-level' , 'admin-level' , 'user-level'
] as const;
