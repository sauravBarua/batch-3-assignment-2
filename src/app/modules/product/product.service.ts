import {ProductModel} from "../product/product.model"
import { TProduct } from "./product.interface"

const createProductIntoDB = async(product:TProduct) =>{
    const result = await ProductModel.create(product)
    return result
}

const getAllProductFromDB = async()=>{
    const result = await ProductModel.find();
    return result;
}

const  getSingleProductFromDB = async (id: string)=>{
    console.log(id)
    const result = await ProductModel.findOne({_id: id})

    return result;
}

const productUpdateFromDB = async(id:string, payload: Partial<TProduct>)=>{
    const result = await ProductModel.findOneAndUpdate({_id: id},payload,{
        new : true,
    })
    return result
}

const deleteProductFromDb = async (id: string)=>{
    const result = await ProductModel.deleteOne({_id: id});
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB,
    getSingleProductFromDB,
    deleteProductFromDb,
    productUpdateFromDB
}
