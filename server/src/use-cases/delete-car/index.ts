import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository";
import { DeleteCarController } from "./delete-car-controller";
import { DeleteCarUseCase } from "./delete-car-use-case";

const prismaCarsRepository = new PrismaCarsRepository()
const deleteCarUseCase = new DeleteCarUseCase(prismaCarsRepository)

const deleteCarController = new DeleteCarController(deleteCarUseCase)

export {
  deleteCarUseCase,
  deleteCarController
}