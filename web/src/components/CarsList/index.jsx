import classes from './CarsList.module.css'

import { CarsListItem } from "../CarsListItem"

export function CarsList(props) {
  function deleteCarHandler(id) {
    props.onDelete(id)
  }

  function editCarHandler(id, car) {
    props.onEdit(id, car)
  }

  return (
    <ul className={classes["car-list"]}>
      {props.cars.map(car => (
        <CarsListItem 
          key={car.id} 
          car={car} 
          onDelete={deleteCarHandler} 
          onEdit={editCarHandler}
        />
      ))}
    </ul>
  )
}