import z from 'zod'
import { Request, Response } from 'express'
import { createCustomerSchema } from '../../dto/customerDTO'
import { createCustomerService } from '../../service/customer/createCustomer.service'




export const createCustomerController = async (req: Request, res: Response) => {
    try {
        const { name, email } = createCustomerSchema.parse(req.body)
        const customer = await createCustomerService({name, email})
        return res.status(201).json({
            message: 'Cliente criado com sucesso',
            data: customer
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json(error.issues)
        }
    }
}
