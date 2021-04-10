import React from 'react';
import DialogsItem from './DialogItem/DialogsItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

  let dialogsElements = 
  props.dialogsPage.dialogs.map ( dialog => <DialogsItem name = {dialog.name} id = {dialog.id} /> );
  
  let messagesElements = 
  props.dialogsPage.messages.map ( message => <Message message = {message.message} /> );
  
  let newMessageElement = React.createRef();

  let onMessageChange = () => {
      let text = newMessageElement.current.value;
      props.updateNewMessageText(text);
  }

  return ( 
    <div>
      <div className = {classes.dialogs}>
        <div className = {classes.dialogsItems}>
          {dialogsElements}
        </div>
        <div className = {classes.message}> 
          {messagesElements}
        </div>
      </div>
      <div className = {classes.messageArea}>
        <textarea cols="50" rows="7" ref = {newMessageElement} onChange = {onMessageChange} value = {props.dialogsPage.newMessageText}/>
      </div>
      <div>
        <button className = {classes.button} onClick = {props.addMessage}>Send message</button>
      </div>
    </div>
  )
}
export default Dialogs;