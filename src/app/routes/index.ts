import express from "express";

const router = express.Router();
const authRoutes = null;
//
const moduleRoutes = [{path: "/auth", route: authRoutes}];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;