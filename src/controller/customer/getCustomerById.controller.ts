import { Request, Response } from 'express';
import { getCustomerByIdService } from '../../service/customer/getCustomerById.service';

export const getCustomerByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const customerId = parseInt(id);

    // Validate if ID is a valid number
    if (isNaN(customerId) || customerId <= 0) {
      return res.status(400).json({
        error: 'ID do cliente deve ser um número válido maior que zero',
      });
    }

    const customer = await getCustomerByIdService(customerId);

    if (!customer) {
      return res.status(404).json({
        error: 'Cliente não encontrado',
      });
    }

    return res.status(200).json({
      message: 'Cliente encontrado com sucesso',
      data: customer,
    });
  } catch (error) {
    console.error('Error getting customer by ID:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
    });
  }
};