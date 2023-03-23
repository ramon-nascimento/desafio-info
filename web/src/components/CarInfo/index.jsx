import classes from './CarInfo.module.css'

import { Modal } from "../Modal";

export function CarInfo(props) {
  return (
    <Modal onClose={props.onClose}>
      <h3>Informações do Veículo</h3>

      <div className={classes['car']}>
        <p>{props.car.placa}</p>
      </div>

      <div className={classes['identifier']}>
        <ul>
          <li>
            Marca <p>{props.car.marca}</p>
          </li>
          <li>
            Modelo <p>{props.car.modelo}</p>
          </li>
          <li>
            Ano <p>{props.car.ano}</p>
          </li>
          <li>
            Chassi <p>{props.car.chassi}</p>
          </li>
          <li>
            Renavam <p>{props.car.renavam}</p>
          </li>
        </ul>
      </div>
    </Modal>
  )
}