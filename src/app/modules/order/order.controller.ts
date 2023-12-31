/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import {catchAsync} from "../../../shared/catchAsync";
import {createOrderService, getOrdersService, getSingleOrderService} from "./order.service";
import {sendResponse} from "../../../shared/sendResponse";

export const createOrder = catchAsync(async (req, res) => {
  const order = await createOrderService(req.body, (req as any).user);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order created successfully",
    data: order,
  });
});

export const getAllORders = catchAsync(async (req, res) => {
  const orders = await getOrdersService((req as any).user);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Order retrieved successfully",
    data: orders,
  });
});

export const getSingleOrder = catchAsync(async (req, res) => {
  const orders = await getSingleOrderService(req.params.id, (req as any).user);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order retrieved successfully",
    data: orders,
  });
});
