import { OrderModel } from "./order.model";
import { TOrder } from "./order.interface";
import { ProductModel } from "../product/product.model";

//Create Order Into DB
const createOrderIntoDB = async (order: TOrder) => {
  const { productId, quantity } = order;
  const product = await ProductModel.findById(productId);

  if (!product?.inventory.inStock) {
    throw new Error("Insufficient quantity available in inventory");
  }

  const result = OrderModel.create(order);

  await ProductModel.updateOne(
    { _id: productId, "inventory.quantity": { $gte: quantity } },
    [
      {
        $set: {
          "inventory.quantity": {
            $subtract: ["$inventory.quantity", quantity],
          },
        },
      },
      {
        $set: {
          "inventory.inStock": {
            $cond: {
              if: { $eq: ["$inventory.quantity", 0] },
              then: false,
              else: true,
            },
          },
        },
      },
    ]
  );

  return result;
};

//Get Order by email From DB

const getAllOrderFromDB = async (query?: { email?: string }) => {
  let result: TOrder[];

  if (query && query.email) {
    result = await OrderModel.find({
      email: { $regex: query.email, $options: "i" },
    });
  } else {
    result = await OrderModel.find();
  }
  return result;
};
export const OrderServices = {
  createOrderIntoDB,
  getAllOrderFromDB,
};
