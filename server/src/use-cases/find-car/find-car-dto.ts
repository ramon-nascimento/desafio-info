import { Car } from "../../entities/car"

// tipo da requisição recebida pelo FindCarUseCase
export type FindCarRequestDTO = string

// tipo da resposta dada pelo FindCarUseCase
export type FindCarResponseDTO = Car | undefined