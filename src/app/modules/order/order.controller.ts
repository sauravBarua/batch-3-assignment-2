/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { OrderServices } from "./order.service"


//create Product

const createOrder = async (req:Request,res: Response)=>{
    try{
        const result = await OrderServices.createOrderIntoDB(req.body)
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result
        })

    }catch(error:any){
        res.status(500).json({
            success: false,
            message: error.message  || "Something went wrong!",
            error: error,
        })
    }
}

export const OrderControllers = {
    createOrder,
}