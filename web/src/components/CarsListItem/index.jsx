import { useState } from "react"
import classes from "./CarsListItem.module.css"

import { CarInfo } from "../CarInfo"
import { Form } from '../Form'
import { Plate } from "../Plate"

export function CarsListItem(props) {
  const [selectedCar, setSelectedCar] = useState({})
  const [isShowCarInfo, setIsShowCarInfo] = useState(false)
  const [isEditingCar, setIsEditingCar] = useState(false)

  function handleEditCar() {
    setSelectedCar(props.car)
    setIsEditingCar(!isEditingCar)
  }

  function handleCarIsShow() {
    setSelectedCar(props.car)
    setIsShowCarInfo(!isShowCarInfo)
  }

  function handleSubmitEditedCar(id, car) {
    props.onEdit(id, car)
  }

  function handleDeleteCar() {
    props.onDelete(props.car.id)
  }

  return (
    <>
      <li 
        className={classes["car-list__item"]} 
        id={props.car.id}
      >
        <div className={classes["item-info"]}>
          <Plate placa={props.car.placa} />
        </div>

        {props.car.marca}

        <div className={classes["item-actions"]}>
          <button onClick={handleEditCar} title="Editar">
            <i className="fa-solid fa-gear"></i>
          </button>

          <button onClick={handleCarIsShow} title="Exibir">
            <i className="fa-solid fa-eye"></i>
          </button>
          
          <button onClick={handleDeleteCar} title="Remover">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </li>

      {isShowCarInfo && <CarInfo car={selectedCar} onClose={handleCarIsShow} />}
      {isEditingCar && 
        <Form 
          title={`Editando o Veículo - ${selectedCar.placa}`}
          car={selectedCar} 
          onClose={handleEditCar} 
          onSubmit={handleSubmitEditedCar} 
        />}
    </>
  )
}