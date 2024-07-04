import {ProductModel} from "../product/product.model"

const createProductIntoDB = async(product:any) =>{
    const result = await ProductModel.create(product)
    return result
}

export const ProductServices = {
    createProductIntoDB
}
