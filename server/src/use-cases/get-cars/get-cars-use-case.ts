import { CarsRepository } from "../../repositories/cars-repository";

export class GetCarsUseCase {
  constructor(
    private carsRepository: CarsRepository
  ) {}

  /**
   * Função que realiza uma chamada ao repositório para buscar todos os veículos
   * cadastrados no banco de dados.
   * 
   * @returns {Promise<Array<Object>>}
   */
  async execute(): Promise<Array<Object>> {
    return await this.carsRepository.getAll()
  }
}