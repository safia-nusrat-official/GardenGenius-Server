import express, { Router } from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { UserRoutes } from '../modules/users/user.routes';
import { PostRoutes } from '../modules/posts/post.routes';
import { CommentRoutes } from '../modules/comments/comment.routes';
import { PaymentRoutes } from '../modules/payments/payment.routes';
import { ActivityRoutes } from '../modules/activities/activity.routes';

const router = express.Router();

const moduleRoutes: { path: string; route: Router }[] = [
    {
        path:"/auth",
        route: AuthRoutes
    },
    {
        path:"/users",
        route: UserRoutes
    },
    {
        path:"/posts",
        route: PostRoutes
    },
    {
        path:"/comments",
        route: CommentRoutes
    },
    {
        path:"/payment",
        route: PaymentRoutes
    },
    {
        path:"/activities",
        route: ActivityRoutes
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
