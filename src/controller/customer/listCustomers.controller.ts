import { Request, Response } from 'express';
import { listCustomersService, ListCustomersParams } from '../../service/customer/listCustomers.service';

export const listCustomersController = async (req: Request, res: Response) => {
  try {
    const { page, limit, search } = req.query;

    const params: ListCustomersParams = {
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

    const result = await listCustomersService(params);

    return res.status(200).json({
      message: 'Clientes listados com sucesso',
      data: result.customers,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error('Error listing customers:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
    });
  }
};