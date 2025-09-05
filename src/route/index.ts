import productRouter from './produtos.route'
import {Router} from 'express'

const router = Router()

router.use('/produtos', productRouter)

export default router   
