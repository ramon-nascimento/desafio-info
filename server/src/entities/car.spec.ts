import { describe } from 'mocha'
import { expect } from 'chai'
import { Car } from './car'

describe('Entidade - Carro', () => {
  it('deverá instanciar um novo veículo', () => {
    const car = new Car({
      ano: 2014,
      chassi: "AAA01",
      marca: "FIAT",
      modelo: "V1",
      placa: "QQX3008",
      renavam: 1010
    })

    expect(car).to.be.instanceOf(Car);
    expect(car.ano).to.be.equal(2014)
  })

  it('não deverá permitir criar um veículo com campos vazios', () => {
    expect(() => {
      return new Car({ 
        ano: 1000, 
        chassi: "", 
        marca: "", 
        modelo: "", 
        placa: "",
        renavam: 0
      })
    }).to.throw(Error)
  })
})