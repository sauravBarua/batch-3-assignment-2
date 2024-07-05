import { OrderModel } from "./order.model"
import { TOrder } from "./order.interface"

//Create Order Into DB

const createOrderIntoDB = async(product:TOrder) =>{
    const result = await OrderModel.create(product)
    return result
}

export const OrderServices = {
    createOrderIntoDB,
}