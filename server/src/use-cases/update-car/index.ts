import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository";
import { UpdateCarController } from "./update-car-controller";
import { UpdateCarUseCase } from "./update-car-use-case";

const prismaCarsRepository = new PrismaCarsRepository()
const updateCarUseCase = new UpdateCarUseCase(prismaCarsRepository)

const updateCarController = new UpdateCarController(updateCarUseCase)

export {
  updateCarUseCase,
  updateCarController
}