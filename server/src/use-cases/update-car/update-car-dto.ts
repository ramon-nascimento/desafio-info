import { Car } from "../../entities/car"

// tipo da requisição recebida pelo UpdateCarUseCase
export type UpdateCarRequestDTO = Car

// tipo da respostada dada pelo UpdateCarUseCase
export type UpdateCarResponseDTO = void