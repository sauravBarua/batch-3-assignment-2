import {ProductModel} from "../product/product.model"
import { TProduct } from "./product.interface"


//Create Product Into DB

const createProductIntoDB = async(product:TProduct) =>{
    const result = await ProductModel.create(product)
    return result
}


//Get All Product From DB
const getAllProductFromDB = async  (query?: { searchTerm?: string }) =>{
    
    let result: TProduct[];

    if (query && query.searchTerm){
        result = await ProductModel.find({
            name:  { $regex : query.searchTerm , $options: 'i'}
        })
    }else{
        result = await ProductModel.find();
    }
    return result;
}

//Get Single Product From DB

const  getSingleProductFromDB = async (id: string)=>{
    console.log(id)
    const result = await ProductModel.findOne({_id: id})

    return result;
}

//Product Update From DB

const productUpdateFromDB = async(id:string, payload: Partial<TProduct>)=>{
    const result = await ProductModel.findOneAndUpdate({_id: id},payload,{
        new : true,
    })
    return result
}

// Delete Product From Db

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
