import express from "express";
import {AuthRoutes} from "../modules/auth/auth.route";
import {UserRoutes} from "../modules/user/user.route";

const router = express.Router();
//
const moduleRoutes = [
  {path: "/auth", route: AuthRoutes},
  {path: "/users", route: UserRoutes},
  {path: "/categories", route: AuthRoutes},
  {path: "/books", route: AuthRoutes},
  {path: "/orders", route: AuthRoutes},
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
