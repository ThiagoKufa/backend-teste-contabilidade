import {Router} from 'express'
import {createProductController} from '../controllers/product/createProduct.controller'

const productRouter = Router()

productRouter.post('', createProductController)

export default productRouter
