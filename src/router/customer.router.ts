import {Router} from 'express'
import { createCustomerController } from '../controller/customer/createCustomer.controller'
import { listCustomersController } from '../controller/customer/listCustomers.controller'
import { getCustomerByIdController } from '../controller/customer/getCustomerById.controller'

const customerRouter = Router()

customerRouter.post('/clientes', createCustomerController)
customerRouter.get('/clientes', listCustomersController)
customerRouter.get('/clientes/:id', getCustomerByIdController)

export default customerRouter