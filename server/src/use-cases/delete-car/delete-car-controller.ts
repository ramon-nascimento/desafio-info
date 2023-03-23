import { Request, Response } from "express";
import { DeleteCarUseCase } from "./delete-car-use-case";
import { z } from "zod";

export class DeleteCarController {
  constructor (
    private deleteCarUseCase: DeleteCarUseCase
  ) {}

  /**
   * Função que realiza o trabalho de intermediar a comunicação do 
   * DeleteCarUseCase com a requisição da API para remoção de um carro existente.
   * 
   * @param {Request} request (express)
   * @param {Response} response (express)
   * 
   * @returns {Promise<Response>} (express)
   */
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteCarSchema = z.object({
      id: z.string()
    })

    const { id } = deleteCarSchema.parse(request.params)
    
    try {
      await this.deleteCarUseCase.execute(id)

      return response.status(201).send()
    } catch (error) {
      return response.status(404).json({
        error: error.message || "Um erro inesperado aconteceu."
      })  
    }
  }
}