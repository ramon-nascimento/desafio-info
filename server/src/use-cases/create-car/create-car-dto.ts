import { Car } from "../../entities/car";

// interface para requisições do CreateCarUseCase
export interface CreateCarRequestDTO {
  placa: string;
  chassi: string;
  renavam: number;
  modelo: string;
  marca: string;
  ano: number;
}

// tipo de resposta dada pelo CreateCarUseCase
export type CreateCarResponseDTO = Car