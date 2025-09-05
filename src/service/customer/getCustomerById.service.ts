import prisma from "../../lib/prismaClient";

export const getCustomerByIdService = async (customerId: number) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: {
        customerId: customerId,
      },
    });

    return customer;
  } catch (error) {
    throw error;
  }
};