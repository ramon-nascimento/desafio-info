import { it } from "mocha"
import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository"
import { DeleteCarUseCase } from "./delete-car-use-case"
import { expect } from "chai"

describe("Caso de Uso - DeleteCar", () => {
  it('deverá excluir um veículo existente ao receber o ID', () => {
    const prismaCarsRepository = new PrismaCarsRepository()
    const deleteCarUseCase = new DeleteCarUseCase(prismaCarsRepository)

    expect(async () => await deleteCarUseCase.execute('clflb5klc0008o448vmem2qux')).to.not.throw()
  })
})