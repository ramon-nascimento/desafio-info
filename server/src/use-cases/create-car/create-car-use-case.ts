import { Car } from "../../entities/car";
import { CarsRepository } from "../../repositories/cars-repository";
import { CreateCarRequestDTO, CreateCarResponseDTO } from "./create-car-dto";

export class CreateCarUseCase {
  constructor (
    private carsRepository: CarsRepository
  ) {}
  
  /**
   * Essa função realiza a chamada ao respositório para a criação de um novo 
   * carro, realizando uma breve verificação se o mesmo já existe no banco de 
   * dados.
   * 
   * @param {Car} obrigatório
   * @returns {Car}
   */
  async execute(request: CreateCarRequestDTO): Promise<CreateCarResponseDTO> {
    const carAlreadyExists = await this.carsRepository.carAlreadyExists(
      request.chassi, 
      request.renavam,
      request.placa
    )

    if (carAlreadyExists) {
      throw new Error("Chassi ou renavam já cadastrados.")
    }

    const car = new Car(request);

    await this.carsRepository.create(car)

    return car
  }
}