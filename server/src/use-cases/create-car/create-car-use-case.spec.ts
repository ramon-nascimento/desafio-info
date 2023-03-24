import { describe } from 'mocha'
import { expect } from 'chai'
import { CreateCarUseCase } from './create-car-use-case'
import { PrismaCarsRepository } from '../../repositories/prisma/prisma-cars-repository'

describe('Caso de Uso - CreateCar', () => {
  it('deverá criar um novo veículo', () => {
    const prismaCarsRepository = new PrismaCarsRepository()
    const createCarUseCase = new CreateCarUseCase(prismaCarsRepository)

    expect(async () => {
      return await createCarUseCase.execute({
        ano: 1,
        chassi: 'teste',
        marca: 'teste',
        modelo: 'teste',
        placa: 'teste',
        renavam: 123456789
      })
    }).to.not.throw()
  })
})