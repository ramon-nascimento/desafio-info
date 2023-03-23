import { CarsRepository } from "../../repositories/cars-repository"
import { FindCarRequestDTO, FindCarResponseDTO } from "./find-car-dto"

export class FindCarUseCase {
  constructor (
    private carsRepository: CarsRepository
  ) {}
  
  /**
   * Essa função realiza a chamada ao respositório para encontrar um carro 
   * já existente no banco de dados.
   * 
   * @param {FindCarRequestDTO} carId 
   * 
   * @returns {Promise<FindCarResponseDTO>}
   */
  async execute(carId: FindCarRequestDTO): Promise<FindCarResponseDTO> {
    const car = await this.carsRepository.findById(carId)

    if (!car) {
      throw new Error("ID não encontrado.")
    }

    return car
  } 
}