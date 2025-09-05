import z from 'zod'


const customerSchema = z.object({
  customerId: z.number().optional(),
  name: z.string(),
  email: z.email(),
  createdAt: z.date().optional(),
})

export const createCustomerSchema = customerSchema.omit({customerId: true, createdAt: true})

export type CreateCustomerDTO = z.infer<typeof createCustomerSchema>
