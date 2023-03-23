import { Car } from "../../entities/car";
import { prisma } from "../../lib/prisma";
import { CarsRepository } from "../cars-repository";

export class PrismaCarsRepository implements CarsRepository {
  async create(car: Car): Promise<void> {
    const carExists = this.carAlreadyExists(car.chassi, car.renavam, car.placa)

    if (!carExists) throw new Error("Esse carro já foi cadastrado.")

    try {
      await prisma.car.create({
        data: {
          ano: car.ano,
          chassi: car.chassi,
          marca: car.marca,
          modelo: car.modelo,
          placa: car.placa,
          renavam: +car.renavam
        }
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async getAll(): Promise<Array<Object>> {
    const cars = await prisma.car.findMany()

    return cars
  }

  async findById(carId: string): Promise<Car> {
    const car = await prisma.car.findFirst({
      where: {
        id: carId
      }
    })

    if (!car) throw new Error("O carro não existe na base de dados.")

    return car
  }

  async update(car: Car): Promise<void> {
    const carExists = await this.carAlreadyExists(car.chassi, car.renavam, car.placa)

    if (!carExists) {
      await this.create(car)
      return
    }

    try {
      await prisma.car.update({
        where: {
          id: car.id
        },
  
        data: {
          ano: car.ano,
          chassi: car.chassi,
          marca: car.marca,
          modelo: car.modelo,
          placa: car.placa,
          renavam: car.renavam
        }
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async delete(id: string): Promise<void> {
    const car = await this.findById(id)
    const carExists = await this.carAlreadyExists(car.chassi, car.renavam, car.placa)

    if (!carExists) throw new Error("Carro não encontrado na base de dados.")

    try {
      await prisma.car.delete({
        where: {
          id: id
        }
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  async carAlreadyExists(chassi: string, renavam: number, placa: string): Promise<Boolean> {
    const docsAlreadyExists = await prisma.car.findFirst({
      where: {
        OR: [
          { chassi: chassi },
          { renavam: renavam },
          { placa: placa }
        ]        
      }
    })

    const carAlreadyExists = docsAlreadyExists ? true : false

    return carAlreadyExists
  }
}