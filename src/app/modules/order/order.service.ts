import { OrderModel } from "./order.model"
import { TOrder } from "./order.interface"

//Create Order Into DB

const createOrderIntoDB = async(product:TOrder) =>{
    const result = await OrderModel.create(product)
    return result
}

//Get Order by email From DB

const getAllOrderFromDB = async  (query?: { email?: string }) =>{
    
    let result: TOrder[];

    if (query && query.email){
        result = await OrderModel.find({
            email:  { $regex : query.email , $options: 'i'}
        })
    }else{
        result = await OrderModel.find();
    }
    return result;
}
export const OrderServices = {
    createOrderIntoDB,
    getAllOrderFromDB
}