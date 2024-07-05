import { Schema, model, Document } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder & Document>({
  email: {
    type: String,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});

export const OrderModel = model<TOrder & Document>("Order", orderSchema);
