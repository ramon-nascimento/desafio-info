import { expect } from "chai";
import { describe } from "mocha";

import { 
  PrismaCarsRepository 
} from "../../repositories/prisma/prisma-cars-repository";
import { FindCarUseCase } from "./find-car-use-case";

describe('Caso de Uso - FindCar', () => {
  it('deverá encontrar o veículo ao passar o ID', async () => {
    const carsRepository = new PrismaCarsRepository()
    const findCarUseCase = new FindCarUseCase(carsRepository)

    expect(async () => 
      await findCarUseCase.execute('clflb5klc0008o448vmem2qux')
    ).to.not.throw()
  })
})