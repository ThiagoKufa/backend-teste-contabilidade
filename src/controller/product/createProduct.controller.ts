import {Request, Response} from 'express'
import { createProductSchema } from '../../dto/productDTO'
import z from 'zod'
import { createProductService } from '../../service/product/createProduct.service'



export const createProductController = async (req: Request, res: Response) => {
  try {
    const createProductDTO = createProductSchema.parse(req.body)
    const product = await createProductService(createProductDTO)
    return res.status(201).json({
      message: 'Produto criado com sucesso',
      data: product
    })
  } catch (error) {
    if(error instanceof z.ZodError){
      return res.status(400).json(error.issues)
    }
  }
}
