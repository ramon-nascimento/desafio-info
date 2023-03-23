import classes from './Form.module.css'

import { Modal } from '../Modal'
import { Button } from '../Button'
import { useEffect, useState } from 'react'

export function Form(props) {
  const [car, setCar] = useState({
    id: "",
    placa: "", 
    chassi: "", 
    renavam: "", 
    modelo: "", 
    marca: "", 
    ano: "" 
  });

  useEffect(() => {
    setCar({ ...props.car })
  }, [])
  
  function handleSubmitForm(e) {
    e.preventDefault()

    let carId = car.id || Math.random()
    
    props.onSubmit(carId, car)
  }

  function placaChangeHandler(e) {
    setCar({
      ...car,
      placa: e.target.value 
    })
  }

  function chassiChangeHandler(e) {
    setCar({
      ...car,
      chassi: e.target.value 
    })
  }

  function renavamChangeHandler(e) {
    setCar({
      ...car,
      renavam: +e.target.value 
    })
  }

  function modeloChangeHandler(e) {
    setCar({
      ...car,
      modelo: e.target.value 
    })
  }

  function marcaChangeHandler(e) {
    setCar({
      ...car,
      marca: e.target.value 
    })
  }

  function anoChangeHandler(e) {
    setCar({
      ...car,
      ano: +e.target.value 
    })
  }

  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={handleSubmitForm} className={classes["form"]}>
        <h3>{props.title}</h3>

        <input 
          type="text" 
          placeholder='Placa'           
          minLength={7}
          maxLength={7}
          defaultValue={car.placa} 
          onChange={placaChangeHandler} 
        />
        <input 
          type="text" 
          placeholder='Chassi' 
          minLength={17}
          maxLength={17}
          defaultValue={car.chassi} 
          onChange={chassiChangeHandler} 
        />
        <input 
          type="number" 
          placeholder='Renavam' 
          defaultValue={car.renavam} 
          onChange={renavamChangeHandler} 
        />
        <input 
          type="text" 
          placeholder='Modelo' 
          defaultValue={car.modelo} 
          onChange={modeloChangeHandler} 
        />
        <input 
          type="text" 
          placeholder='Marca' 
          maxLength={15}
          defaultValue={car.marca} 
          onChange={marcaChangeHandler} 
        />
        <input 
          type="number" 
          placeholder='Ano' 
          defaultValue={car.ano} 
          onChange={anoChangeHandler} 
        />

        <div className={classes["form-actions"]}>
          <Button text="Confirmar" type="submit" />

          <Button 
            text="Cancelar" 
            type="button"
            onClick={props.onClose} 
            style={{ 
              backgroundColor: "#dc3545", 
              color: "#e1e1e1" 
            }} 
          />
        </div>
      </form>
    </Modal>
  )
}