import classes from "./Card.module.css"

export function Card(props) {
  return (
    <div className={classes["card"]}>
      <div className={classes["card-title"]}>
        <h3>{props.title}</h3>
      </div>
      
      <div className={classes["card-body"]}>
        {props.children}
      </div>
    </div>
  )
}