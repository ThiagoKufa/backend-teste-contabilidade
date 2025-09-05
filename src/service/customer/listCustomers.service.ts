import prisma from "../../lib/prismaClient";

export interface ListCustomersParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface ListCustomersResponse {
  customers: any[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export const listCustomersService = async (params: ListCustomersParams): Promise<ListCustomersResponse> => {
  try {
    const page = params.page || 1;
    const limit = params.limit || 10;
    const search = params.search;
    const skip = (page - 1) * limit;

    // Build where clause for search (name or email)
    const whereClause = search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
            {
              email: {
                contains: search,
                mode: 'insensitive' as const,
              },
            },
          ],
        }
      : {};

    // Get total count for pagination
    const totalItems = await prisma.customer.count({
      where: whereClause,
    });

    // Get customers with pagination
    const customers = await prisma.customer.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalPages = Math.ceil(totalItems / limit);

    return {
      customers,
      pagination: {
        currentPage: page,
        totalPages,
        totalItems,
        itemsPerPage: limit,
      },
    };
  } catch (error) {
    throw error;
  }
};