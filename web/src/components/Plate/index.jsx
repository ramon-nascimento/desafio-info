import classes from './Plate.module.css'

export function Plate(props) {
  return (
    <div className={classes['plate']} {...props}>
      <p>{props.placa}</p>
    </div>
  )
}