import { CarsRepository } from "../../repositories/cars-repository";
import { DeleteCarRequestDTO, DeleteCarResponseDTO } from "./delete-car-dto";

export class DeleteCarUseCase {
  constructor (
    private carsRepository: CarsRepository
  ) {}
  
  /**
   * Função que faz uma chamada ao repositório para executar a busca do carro
   * no banco de dados, a partir do ID do mesmo.
   * 
   * @param {DeleteCarRequest} Parametro obrigatorio
   */
  async execute(id: DeleteCarRequestDTO): DeleteCarResponseDTO {
    try {
      await this.carsRepository.delete(id)
    } catch (error) {
      throw new Error(error.message)
    }
  }
}