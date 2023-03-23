import classes from './Popup.module.css'

export function Popup(props) {
  const popupType = props.type === 'error' ? '#dc3545' : '#28a745'

  return (
    <div className={classes['popup']} style={{ background: popupType }}>
      <p>{props.message}</p>
    </div>
  )
}