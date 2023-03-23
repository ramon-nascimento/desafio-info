import { Request, Response } from "express";
import { FindCarUseCase } from "./find-car-use-case";
import { z } from "zod";

export class FindCarController {
  constructor (
    private findCarUseCase: FindCarUseCase
  ) {}

  /**
   * Função que realiza o trabalho de intermediar a comunicação do 
   * FindCarUseCase com a requisição da API, retornando ao usuário o carro 
   * desejado.
   * 
   * @param {Request} request (express)
   * @param {Response} response (express)
   * 
   * @returns {Promise<Response>}
   */
  async handle(request: Request, response: Response): Promise<Response> {
    const findRequestSchema = z.object({
      id: z.string()
    })
    
    const { id } = findRequestSchema.parse(request.params)

    try {
      const car = await this.findCarUseCase.execute(id)

      return response.status(201).send(car)
    } catch (error) {
      return response.status(404).json({
        error: error.message || "Um erro inesperado ocorreu."
      })
    }
  }
}