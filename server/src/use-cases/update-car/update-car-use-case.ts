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
    if (car.ano > 9999) 
      throw new Error("Ano do veículo inválido.")

    if (car.renavam.toString().length !== 9)
      throw new Error("Tamanho do renavam inválido. (9 caracteres)")

    if (car.chassi.length < 17) 
      throw new Error("Tamanho do chassi inválido. (17 caracteres)")
      
    try {
      await this.carsRepository.update(car)
    } catch (error) {
      throw new Error(error)
    }
  }
}