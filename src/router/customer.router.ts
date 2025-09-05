// ... existing code ...
import {Router} from 'express'
import { createCustomerController } from '../controller/customer/createCustomer.controller'

const customerRouter = Router()

customerRouter.post('/clientes', createCustomerController)
customerRouter.get('/clientes', (_, res) => {
    console.log("Listar todos os clientes")
    res.send("Listar todos os clientes")
})

export default customerRouter