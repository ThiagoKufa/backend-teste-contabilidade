import { Request, Response } from 'express';
import { listProductsService, ListProductsParams } from '../../service/product/listProducts.service';

export const listProductsController = async (req: Request, res: Response) => {
  try {
    const { page, limit, search } = req.query;

    const params: ListProductsParams = {
      page: page ? parseInt(page as string) : undefined,
      limit: limit ? parseInt(limit as string) : undefined,
      search: search as string,
    };

    // Validate pagination parameters
    if (params.page && params.page < 1) {
      return res.status(400).json({
        error: 'Page must be greater than 0',
      });
    }

    if (params.limit && (params.limit < 1 || params.limit > 100)) {
      return res.status(400).json({
        error: 'Limit must be between 1 and 100',
      });
    }

    const result = await listProductsService(params);

    return res.status(200).json({
      message: 'Produtos listados com sucesso',
      data: result.products,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error('Error listing products:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
    });
  }
};