import z from 'zod'

const productSchema = z.object({
  productId: z.number().optional(),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
})

export const createProductSchema = productSchema.omit({productId: true, createdAt: true})
export const updateProductSchema = productSchema.omit({productId: true, createdAt: true, updatedAt: true})

export type ProductDTO = z.infer<typeof productSchema>
export type CreateProductDTO = z.infer<typeof createProductSchema>
export type UpdateProductDTO = z.infer<typeof updateProductSchema>


