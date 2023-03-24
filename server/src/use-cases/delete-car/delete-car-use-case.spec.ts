import { it } from "mocha"
import { PrismaCarsRepository } from "../../repositories/prisma/prisma-cars-repository"
import { DeleteCarUseCase } from "./delete-car-use-case"
import { expect } from "chai"
import axios from 'axios'

describe("Caso de Uso - DeleteCar", () => {
  it('deverá excluir um veículo existente ao receber o ID', () => {
    const prismaCarsRepository = new PrismaCarsRepository()
    const deleteCarUseCase = new DeleteCarUseCase(prismaCarsRepository)

    expect(async () => await deleteCarUseCase.execute('clflb5klc0008o448vmem2qux')).to.not.throw()
  })

  // Tive a ideia de implementar o teste abaixo, mas não soube como escrever.
  // Na aplicação, é impossível excluir um veículo inexistente.
  // it('não deverá excluir um veículo inexistente', (done) => { 
  //   axios.delete('http://localhost:3333/cars/1').then(res => {
  //     expect(res.status).to.throw()
  //     done()
  //   }).catch(err => done(err))
  // })
})