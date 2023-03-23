import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository";
import { GetCarsController } from "./get-cars-controller";
import { GetCarsUseCase } from "./get-cars-use-case";

const prismaCarsRepository = new PrismaCarsRepository()
const getCarsUseCase = new GetCarsUseCase(prismaCarsRepository)

const getCarsController = new GetCarsController(getCarsUseCase)

export {
  getCarsController,
  getCarsUseCase
}