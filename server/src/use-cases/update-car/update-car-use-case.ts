import { CarsRepository } from "../../repositories/cars-repository";
import { UpdateCarRequestDTO, UpdateCarResponseDTO } from "./update-car-dto";

export class UpdateCarUseCase {
  constructor (
    private carsRepository: CarsRepository
  ) {}

  /**
   * Função que realiza uma comunicação com o repositório para atualizar o veículo
   * com base nas informações recebidas.
   * 
   * @param {UpdateCarRequestDTO} objeto Car
   */
  async execute(car: UpdateCarRequestDTO): Promise<UpdateCarResponseDTO> {
    try {
      await this.carsRepository.update(car)
    } catch (error) {
      throw new Error("Veículo não encontrado na base de dados.")
    }
  }
}