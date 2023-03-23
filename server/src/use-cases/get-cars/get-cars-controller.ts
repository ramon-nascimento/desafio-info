import { Response } from "express"
import { GetCarsUseCase } from "./get-cars-use-case"

export class GetCarsController {
  constructor (
    private getCarsUseCase: GetCarsUseCase
  ) {}

  /**
   * Função que realiza o trabalho de intermediar a comunicação do 
   * GetCarsUseCase com a requisição da API, retornando ao usuário todos os 
   * carros cadastrados na base de dados.
   * 
   * @param {Response} response (express) 
   * 
   * @returns {Promise<Response>} (express)
   */
  async handle(response: Response): Promise<Response>  {
    try {
      const cars = await this.getCarsUseCase.execute()
      
      return response.status(201).send(cars)
    } catch (error) {
      return response.status(401).json({
        error: error.message || "Um erro inesperado aconteceu."
      })
    }
  }
}