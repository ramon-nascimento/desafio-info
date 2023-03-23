import classes from "./Button.module.css"

export function Button(props) {
  return (
    <button className={classes["button"]} onClick={props.onClick} {...props}>
      {props.text}
    </button>
  )
}