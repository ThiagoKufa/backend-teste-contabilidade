import { Request, Response } from 'express';
import { getProductByIdService } from '../../service/product/getProductById.service';

export const getProductByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const productId = parseInt(id);

    // Validate if ID is a valid number
    if (isNaN(productId) || productId <= 0) {
      return res.status(400).json({
        error: 'ID do produto deve ser um número válido maior que zero',
      });
    }

    const product = await getProductByIdService(productId);

    if (!product) {
      return res.status(404).json({
        error: 'Produto não encontrado',
      });
    }

    return res.status(200).json({
      message: 'Produto encontrado com sucesso',
      data: product,
    });
  } catch (error) {
    console.error('Error getting product by ID:', error);
    return res.status(500).json({
      error: 'Erro interno do servidor',
    });
  }
};