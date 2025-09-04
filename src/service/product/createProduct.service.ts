import { CreateProductDTO } from "../../dto/productDTO";
import prisma from "../../lib/prismaClient";





export const createProductService = async (createProductDTO: CreateProductDTO) => {
    try {
        const product = await prisma.product.create({
            data: createProductDTO
        })
        return product
    } catch (error) {
        return error
    }
}