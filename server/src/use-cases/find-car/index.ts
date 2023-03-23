import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository";
import { FindCarController } from "./find-car-controller";
import { FindCarUseCase } from "./find-car-use-case";

const prismaCarsRepository = new PrismaCarsRepository()
const findCarUseCase = new FindCarUseCase(prismaCarsRepository)

const findCarController = new FindCarController(findCarUseCase)

export {
  findCarController,
  findCarUseCase
}