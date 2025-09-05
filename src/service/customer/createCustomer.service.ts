import {CreateCustomerDTO} from "../../dto/customerDTO";
import prisma from "../../lib/prismaClient";



export const createCustomerService = async (createCustomerDTO: CreateCustomerDTO) => {
    try {
        const customer = await prisma.customer.create({
            data: createCustomerDTO
        })
        return customer
    } catch (error) {
        return error
    }
}

