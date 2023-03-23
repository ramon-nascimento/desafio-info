import { Request, Response } from "express";
import { UpdateCarUseCase } from "./update-car-use-case";
import { z } from "zod";

export class UpdateCarController {
  constructor (
    private updateCarUseCase: UpdateCarUseCase
  ) {}

  /**
   * Função que realiza o trabalho de intermediar a comunicação do 
   * UpdateCarUseCase com a requisição da API, com o intuito de atualizar o
   * veículo com base no ID passado pelo usuário.
   * 
   * @param {Request} request (express) 
   * @param {Response} response (express) 
   * 
   * @returns {Promise<Response>} (express)
   */
  async handle(request: Request, response: Response): Promise<Response> {
    const idRequestSchema = z.object({ id: z.string() })
    const carRequestSchema = z.object({
      chassi: z.string(),
      placa: z.string(),
      renavam: z.number(),
      modelo: z.string(),
      marca: z.string(),
      ano: z.number()
    })

    const { id } = idRequestSchema.parse(request.params)
    const { chassi, placa, renavam, modelo, marca, ano } = carRequestSchema.parse(request.body)

    try {
      await this.updateCarUseCase.execute({ id, chassi, placa, renavam, modelo, marca, ano })

      return response.status(201).send()
    } catch (error) {
      return response.status(401).json({
        error: error.message || "Erro inesperado ocorreu."
      })
    }
  }
}