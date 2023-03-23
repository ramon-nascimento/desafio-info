import { Router } from "express";
import { createCarController } from "./use-cases/create-car";
import { findCarController } from "./use-cases/find-car";
import { updateCarController } from "./use-cases/update-car";
import { getCarsController } from "./use-cases/get-cars";
import { deleteCarController } from "./use-cases/delete-car";

const router = Router()

// rota para criação de um novo carro
router.post('/car', (req, res) => {
  return createCarController.handle(req, res)
})

// rota para retornar um único carro pelo ID
router.get('/cars/:id', (req, res) => {
  return findCarController.handle(req, res)
})

// rota para retornar todos os carros
router.get('/cars', (req, res) => {
  return getCarsController.handle(res)
})

// rota para atualizar os dados de um único carro
router.put('/cars/:id', (req, res) => {
  return updateCarController.handle(req, res)
})

// rota para deletar o carro do banco de dados
router.delete('/cars/:id', (req, res) => {
  return deleteCarController.handle(req, res)
})

export { router }