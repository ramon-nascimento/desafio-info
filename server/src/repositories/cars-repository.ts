import { Car } from "../entities/car";

// 'contrato' que define os métodos do repositório
export interface CarsRepository {
  create(car: Car): Promise<void>;
  getAll(): Promise<Array<Object>>;
  update(car: Car): Promise<void>;
  delete(carId: string): Promise<void>;
  findById(carId: string): Promise<Car>;
  carAlreadyExists(chassi: string, renavam: number, placa: string): Promise<Boolean>;
}