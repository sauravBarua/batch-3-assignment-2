/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express"
import { OrderServices } from "./order.service"
import { TOrder } from "./order.interface"


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

// Get All Order and by email

const getAllOrders = async (req:Request,res: Response): Promise<void>=>{

    const search = req.query.email as string;

    try{

        let result: TOrder[];

        if(search){
             result = await OrderServices.getAllOrderFromDB(req.query)
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully for user email!",
                data: result
            })

        }else{
             result = await OrderServices.getAllOrderFromDB()
            res.status(200).json({
                success: true,
                message:"Products are fetched succesfully!",
                data: result
            })
        }

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
    getAllOrders
}