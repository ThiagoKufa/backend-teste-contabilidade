import {Router} from 'express'
import {createProductController} from '../controller/product/createProduct.controller'

const productRouter = Router()

productRouter.post('', createProductController)

export default productRouter
