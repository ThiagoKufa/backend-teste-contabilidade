import prisma from "../../lib/prismaClient";

export const getProductByIdService = async (productId: number) => {
  try {
    const product = await prisma.product.findUnique({
      where: {
        productId: productId,
      },
    });

    return product;
  } catch (error) {
    throw error;
  }
};