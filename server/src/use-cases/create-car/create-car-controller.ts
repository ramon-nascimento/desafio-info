import { Request, Response } from "express";
import { CreateCarUseCase } from "./create-car-use-case";
import { z } from 'zod'

export class CreateCarController {
  constructor(
    private createCarUseCase: CreateCarUseCase
  ) {} 
  
    /**
     * Função que realiza o trabalho de intermediar a comunicação do 
     * CreateCarUseCase com a requisição da API, com o intuito de criar um novo
     * veículo.
     * 
     * @param {Request} Parametro obrigatorio (express)
     * @param {Response} Parametro obrigatorio (express)
     * 
     * @returns {Response} (express)
     */
  async handle(request: Request, response: Response): Promise<Response> {
    const carRequestSchema = z.object({
      chassi: z.string(),
      placa: z.string(),
      renavam: z.number(),
      modelo: z.string(),
      marca: z.string(),
      ano: z.number()
    })
    
    const { chassi, placa, renavam, modelo, marca, ano } = carRequestSchema.parse(request.body)

    try {
      await this.createCarUseCase.execute({ chassi, placa, renavam, modelo, marca, ano })

      return response.status(201).send()
    } catch(error) {
      return response.status(400).json({
        error: error.message || "Algum erro inesperado aconteceu."
      })
    }
  }
}