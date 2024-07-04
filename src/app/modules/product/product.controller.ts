import { Request, Response} from "express";
import { ProductServices } from "./product.service";




const createProduct = async (req:Request,res: Response)=>{
    try{
        const result = await ProductServices.createProductIntoDB(req.body)
        res.status(200).json({
            success: true,
            message:"Product created successfully!",
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


const getAllProducts = async (req:Request,res: Response)=>{
    try{
        const result = await ProductServices.getAllProductFromDB()
        res.status(200).json({
            success: true,
            message:"Products are fetched succesfully!",
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

const getSingleProduct = async (req:Request,res: Response)=>{
    try{
        const productId = req.params.id
        const result = await ProductServices.getSingleProductFromDB(productId)
        res.status(200).json({
            success: true,
            message:"Products are fetched succesfully!",
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

export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct
}