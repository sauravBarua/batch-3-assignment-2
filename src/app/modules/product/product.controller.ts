/* eslint-disable @typescript-eslint/no-explicit-any */
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

    const search = req.query.searchTerm as string;
    console.log(search)

    try{

        let result;
        if(search){
             result = await ProductServices.getAllProductFromDB(req.query)
            res.status(200).json({
                success: true,
                message: `Products matching search term '${search}' fetched successfully!`,
                data: result
            })

        }else{
             result = await ProductServices.getAllProductFromDB()
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



const getSingleProduct = async (req:Request,res: Response)=>{
    try{
        const {productId} = req.params
        // console.log(productId)

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

const updeteProduct = async (req:Request,res: Response)=>{
    try{
        const {productId} = req.params
        const payload = req.body
        console.log(payload)

        const result = await ProductServices.productUpdateFromDB(productId,payload)
        res.status(200).json({
            success: true,
            message:"Products are updete succesfully!",
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
const deletedProduct = async (req:Request,res: Response)=>{
    try{
        const {productId} = req.params
        const result = await ProductServices.deleteProductFromDb(productId)
        res.status(200).json({
            success: true,
            message:"Product is deleted succesfully!",
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
    getSingleProduct,
    updeteProduct,
    deletedProduct
}