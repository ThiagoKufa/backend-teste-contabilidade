import {Router} from 'express'
import productRouter from './product.router'
import customerRouter from './customer.router'

const router = Router()

router.use(productRouter)
router.use(customerRouter)


export default router   
