import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository";
import { CreateCarController } from "./create-car-controller";
import { CreateCarUseCase } from "./create-car-use-case";

const prismaCarsRepository = new PrismaCarsRepository()
const createCarUseCase = new CreateCarUseCase(prismaCarsRepository)

const createCarController = new CreateCarController(createCarUseCase)

export {
  createCarController,
  createCarUseCase
}