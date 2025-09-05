import prisma from "../../lib/prismaClient";

export interface ListProductsParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface ListProductsResponse {
  products: any[];
  pagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
}

export const listProductsService = async (params: ListProductsParams): Promise<ListProductsResponse> => {
  try {
    const page = params.page || 1;
    const limit = params.limit || 10;
    const search = params.search;
    const skip = (page - 1) * limit;

    // Build where clause for search
    const whereClause = search
      ? {
          name: {
            contains: search,
            mode: 'insensitive' as const,
          },
        }
      : {};

    // Get total count for pagination
    const totalItems = await prisma.product.count({
      where: whereClause,
    });

    // Get products with pagination
    const products = await prisma.product.findMany({
      where: whereClause,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const totalPages = Math.ceil(totalItems / limit);

    return {
      products,
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