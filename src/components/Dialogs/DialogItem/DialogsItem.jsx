import { NavLink } from 'react-router-dom';
import classes from './DialogsItem.module.css';

const DialogsItem = (props) => {

  let path  = '/Dialogs/' + props.id;

  return (
    <div className = {classes.dialogItems} >
        <NavLink to = {path} className = {classes.dialog}  activeClassName = {classes.active}>{props.name}</NavLink>
        </div>
  )
}

export default DialogsItem;