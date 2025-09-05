import {Router} from 'express'
import {createProductController} from '../controller/product/createProduct.controller'
import {listProductsController} from '../controller/product/listProducts.controller'
import {getProductByIdController} from '../controller/product/getProductById.controller'

const productRouter = Router()

productRouter.post('/produtos', createProductController)
productRouter.get('/produtos', listProductsController)
productRouter.get('/produtos/:id', getProductByIdController)

export default productRouter
