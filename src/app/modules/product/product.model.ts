import { model, Schema } from "mongoose";

const variantSchema = new Schema({
    type: { type: String},
    value: { type: String}
}, { _id: false })

const inventorySchema = new Schema({
    quantity: { type: Number },
    inStock: { type: Boolean}
  },{ _id: false })

const productSchema = new Schema({
    name: { type: String },
    description: { type: String },
    price: { type: String },
    category: { type: String },
    tags: { type: [String]},
    variants: { type: [variantSchema]},
    inventory:{ type:inventorySchema }
})

export const ProductModel = model('product', productSchema);