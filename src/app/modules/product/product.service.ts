import {ProductModel} from "../product/product.model"

const createProductIntoDB = async(product:any) =>{
    const result = await ProductModel.create(product)
    return result
}

const getAllProductFromDB = async()=>{
    const result = await ProductModel.find();
    return result;
}

export const ProductServices = {
    createProductIntoDB,
    getAllProductFromDB
}
