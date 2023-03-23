import './App.css'
import { useEffect, useState } from 'react'

import { api } from './lib/axios'

import { Card } from './components/Card'
import { Button } from './components/Button'
import { CarsList } from './components/CarsList'
import { Form } from './components/Form'
import { Popup } from './components/Popup'

function App() {
  const [cars, setCars] = useState([])
  const [getError, setGetError] = useState({ error: false, message: '' })
  const [isAddingCar, setIsAddingCar] = useState(false)

  async function fetchCars() {
    try {
      const response = await api.get('cars')

      setCars(response.data) 
    } catch (error) {
      console.error("Um erro ocorreu ao gerar a lista.")
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  async function deleteCarHandler(id) {
    try {
      await api.delete(`cars/${id}`);
      fetchCars()
    } catch (error) {
      setGetError({ error: true, message: "Ocorreu um erro ao deletar o veículo." })
    }
  }

  async function editCarHandler(id, car) {
    try {      
      const editedCar = cars.map(async (currentCar) => {
        if (currentCar.id === id) {
          await api.put(`cars/${id}`, { ...car })
          fetchCars()
        }
  
        return currentCar
      })
      
      setCars(editedCar)
    } catch (error) {
      setGetError({ error: true, message: "Ocorreu um erro ao editar o veículo." })
    }
  }

  async function submitCarHandler(id, {
    ano, chassi, renavam, marca, modelo, placa
  }) {
    try {
      await api.post('car', { ano, chassi, renavam, marca, modelo, placa })

      fetchCars()

      setCars(currentCars => [...currentCars, {
        ano, chassi, renavam, marca, modelo, placa
      }])
      
      isAddingCarHandler();
    } catch (error) {
      setGetError({ error: true, message: "Veículo já cadastrado." })
    }
  }

  function isAddingCarHandler() {
    setIsAddingCar(!isAddingCar)
  }

  return (
    <div className="App">
      {getError.error && <Popup type="error" message={getError.message} />}
      <Card title="Listagem de Veículos">
        <CarsList 
          cars={cars} 
          onDelete={deleteCarHandler} 
          onEdit={editCarHandler} 
        />

        <Button text="+ Novo Carro" onClick={isAddingCarHandler} />

      </Card>
      {isAddingCar && 
        <Form 
          title="Adicionar um Novo Carro" 
          onClose={isAddingCarHandler}
          onSubmit={submitCarHandler}
        />}
    </div>
  )
}

export default App
