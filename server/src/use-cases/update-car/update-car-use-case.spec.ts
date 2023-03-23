import { it } from "mocha"
import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository"
import { UpdateCarUseCase } from "./update-car-use-case"
import { expect } from "chai"

describe('Caso de Uso - UpdateCar', () => {
  it('deverá atualizar o carro com ID correspondente a solicitação', async () => {
    const carsRepository = new PrismaCarsRepository()
    const updateCarUseCase = new UpdateCarUseCase(carsRepository)      

    const car = {
      id: 'clfk2daet0000o4dc2z8bfopj',
      ano: 2023,
      chassi: "9BM3840F220",
      marca: "MBB",
      modelo: "O500",
      placa: "QQX3008",
      renavam: 985580358
    }

    expect(async () => await updateCarUseCase.execute(car)).to.not.throw()
  })
})